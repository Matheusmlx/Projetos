const bannerModel = require("../models/Banner.model")

const uploadPhotos = async (req, res) => {
    try {
        const novasFotos = req.files.map(file => file.data.link);
        const aeronave = await bannerModel
            .findOne({ _id: req.query.id })
            .select("fotos");
        if (!aeronave) {
            throw new Error("Id não encontrado!");
        }
        const fotos = aeronave.fotos.concat(novasFotos);
        await bannerModel.updateOne({ _id: req.query.id }, { fotos });
        res.status(201).json({ mensagem: { criado: novasFotos } });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

const saveBanner = async (req, res) => {
    if (!req.is("application/json")) {
        res
            .status(400)
            .json({ erro: "Bad Request! content-type deve ser application/json" });
    }
    try {
        const banner = new bannerModel(req.body);
        const response = await banner.save();
        res.send(response);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

const update = async (req, res) => {
    try {
        const response = await bannerModel.findByIdAndUpdate(
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

const deleteBanner = async function (req, res) {
    try {
        const response = await bannerModel.findOneAndDelete({
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
        const banner = await bannerModel.findById({ _id }).select("fotos");
        res.json(banner.fotos);
    } catch (err) {
        res.json({ erro: err.message });
    }
};

module.exports = {
    saveBanner,
    deleteBanner,
    sendPhoto,
    update,
    uploadPhotos
};
