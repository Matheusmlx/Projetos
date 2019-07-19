const homeTextsModel = require("../models/homeTexts.model");

const savehomeTexts = async (req, res) => {
    if (!req.is("application/json")) {
        res
            .status(400)
            .json({ erro: "Bad Request! content-type deve ser application/json" });
    } else {
        const homeTexts = new homeTextsModel(req.body);
        res.status(201).json({
            criado: homeTexts._id
        });
        try {
            await homeTexts.save();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
}

const findhomeTexts = async (req, res) => {
    try {
        const response = await homeTextsModel
            //.findById({ _id: req.params.lang })
            .findOne({ lang: req.params.lang })
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

const updatehomeTexts = async (req, res) => {
    try {
        const _id = req.params.id;
        response = await homeTextsModel.findByIdAndUpdate({ _id }, req.body, {
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

const deletehomeTexts = async (req, res) => {
    try {
        const _id = req.params.id;
        const response = await homeTextsModel.findByIdAndDelete({ _id });
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json({ deletado: response._id });
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

module.exports = {
    savehomeTexts,
    findhomeTexts,
    deletehomeTexts,
    updatehomeTexts
};