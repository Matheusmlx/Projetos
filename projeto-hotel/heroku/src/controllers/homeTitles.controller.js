const homeTitlesModel = require("../models/homeTitles.model");

const savehomeTitles = async (req, res) => {
    if (!req.is("application/json")) {
        res
            .status(400)
            .json({ erro: "Bad Request! content-type deve ser application/json" });
    } else {
        const hometitles = new homeTitlesModel(req.body);
        res.status(201).json({
            criado: hometitles._id
        });
        try {
            await hometitles.save();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
}

const findhomeTitle = async (req, res) => {
    try {
        const response = await homeTitlesModel
            .findOne({ lang: req.params.lang })
        //.findById({ _id: req.params.id })
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

const updatehomeTitles = async (req, res) => {
    try {
        const _id = req.params.id;
        response = await homeTitlesModel.findByIdAndUpdate({ _id }, req.body, {
            new: true
        });
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.json({ erro: err.message });
    }
};

const deletehomeTitles = async (req, res) => {
    try {
        const _id = req.params.id;
        const response = await homeTitlesModel.findByIdAndDelete({ _id });
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json({ deletado: response._id });
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

module.exports = {
    savehomeTitles,
    findhomeTitle,
    deletehomeTitles,
    updatehomeTitles
};