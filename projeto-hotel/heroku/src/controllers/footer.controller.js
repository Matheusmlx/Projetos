const footerModel = require("../models/footer.model");

const saveFooter = async (req, res) => {
    if (!req.is("application/json")) {
        res
            .status(400)
            .json({ erro: "Bad Request! content-type deve ser application/json" });
    } else {
        const footer = new footerModel(req.body);
        res.status(201).json({
            criado: footer._id
        });
        try {
            await footer.save();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
}

const findFooter = async (req, res) => {
    try {
        const response = await footerModel
            .findById({ _id: req.params.id })
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

const updateFooter = async (req, res) => {
    try {
        const _id = req.params.id;
        response = await footerModel.findByIdAndUpdate({ _id }, req.body, {
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

const deleteFooter = async (req, res) => {
    try {
        const _id = req.params.id;
        const response = await footerModel.findByIdAndDelete({ _id });
        if (!response) {
            throw new Error("Id não encontrado!");
        }
        res.status(200).json({ deletado: response._id });
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
};

module.exports = {
    saveFooter,
    findFooter,
    deleteFooter,
    updateFooter
};