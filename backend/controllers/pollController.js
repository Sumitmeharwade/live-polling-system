let polls = {};  // In-memory storage for simplicity

let role;

// import roles from '../index';

// Create a new poll
exports.createPoll = (req, res) => {
  const { id, question, options, teacher } = req.body;
  polls[id] = { id, question, options, teacher, answers: [] };
  res.status(201).json({ message: 'Poll created', poll: polls[id] });
};

// Get all polls
exports.getPolls = (req, res) => {
  res.status(200).json(Object.values(polls));
};

// add role
exports.addRole = (req, res) => {
  if(role) {
    return res.status(400).json({ message: 'Role already exists', role });
  }
  role = req.body.role;
  res.status(200).json({ message: 'Role added', role });
};

//update role
exports.updateRole = (req, res) => {
  role = req.body.role;
  res.status(200).json({ message: 'Role updated', role });
}

// Get role
exports.getRole = (req, res) => {
  res.status(200).json({ role });
};