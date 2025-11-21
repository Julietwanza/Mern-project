const WaterProject = require('../models/WaterProject');


exports.listProjects = async (req, res, next) => {
try {
const projects = await WaterProject.find().sort({ createdAt: -1 });
res.json(projects);
} catch (err) { next(err); }
};


exports.createProject = async (req, res, next) => {
try {
const { title, description, location, impact } = req.body;
if (!title) return res.status(400).json({ error: 'title is required' });
const p = new WaterProject({ title, description, location, impact });
const saved = await p.save();
res.status(201).json(saved);
} catch (err) { next(err); }
};


exports.getProject = async (req, res, next) => {
try {
const p = await WaterProject.findById(req.params.id);
if (!p) return res.status(404).json({ error: 'Project not found' });
res.json(p);
} catch (err) { next(err); }
};


exports.updateProject = async (req, res, next) => {
try {
const updated = await WaterProject.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
if (!updated) return res.status(404).json({ error: 'Project not found' });
res.json(updated);
} catch (err) { next(err); }
};


exports.deleteProject = async (req, res, next) => {
try {
const deleted = await WaterProject.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ error: 'Project not found' });
res.json({ success: true });
} catch (err) { next(err); }
};
