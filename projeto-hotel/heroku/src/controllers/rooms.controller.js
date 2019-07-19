const roomsModel = require("../models/rooms.model")

const saveRooms = async (req, res) => {
    if (!req.is("application/json")) {
        res
            .status(400)
            .json({ erro: "Bad Request! content-type deve ser application/json" });
    }
    try {
        const rooms = new roomsModel(req.body);
        const response = await rooms.save();
        res.send(response);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};
const uploadPhotos = async (req, res) => {
    try {
        const novasFotos = req.files.map(file => file.data.link);
        const rooms = await roomsModel
            .findOne({ _id: req.query.id })
            .select("fotos");
        if (!rooms) {
            throw new Error("Id não encontrado!");
        }

        const fotos = rooms.fotos.concat(novasFotos);
        await roomsModel.updateOne({ _id: req.query.id }, { fotos });
        res.status(201).json({ mensagem: { criado: novasFotos } });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};


const findRoom = async (req, res) => {
    try {
        const response = await roomsModel.findOne({ lang: req.params.lang });
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

const findRooms = async (req, res) => {
    try {
        const response = await roomsModel.find({});
        if (!response) {
            throw new Error("Nenhuma Rooms cadastrada!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

const update = async (req, res) => {
    try {
        const response = await roomsModel.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.json({ erro: err.message });
    }
};
const deleteRoom = async function (req, res) {
    try {
        const response = await roomsModel.findOneAndDelete({
            _id: req.params.id
        });
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};
const sendPhoto = async (req, res) => {
    const _id = req.params.id;
    try {
        const rooms = await roomsModel.findById({ _id }).select("fotos");
        res.json(rooms.fotos);
    } catch (err) {
        res.json({ erro: err.message });
    }
};


module.exports = {
    saveRooms,
    findRooms,
    deleteRoom,
    sendPhoto,
    update,
    findRoom,
    uploadPhotos
};
