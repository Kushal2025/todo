# MERN Todo App

A full-stack todo application built with MongoDB, Express.js, React, and Node.js following MVC architecture.

## Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Priority levels (Low, Medium, High)
- ✅ Filter todos by status (All, Pending, Completed)
- ✅ Responsive design
- ✅ Real-time statistics
- ✅ Clean MVC architecture

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

## Project Structure

```
mern-todo-app/
├── backend/
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoForm.css
│   │   │   ├── TodoItem.js
│   │   │   └── TodoItem.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## Prerequisites

Before running this application, make sure you have the following:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier available)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd mern-todo-app
```

### 2. Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a new cluster (select the free tier)
3. Create a database user with read/write permissions
4. Add your IP address to the IP whitelist (or use 0.0.0.0/0 for development)
5. Get your connection string from the "Connect" button

### 3. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```bash
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mern-todo?retryWrites=true&w=majority
```

**Replace:**
- `username` with your MongoDB Atlas username
- `password` with your MongoDB Atlas password
- `cluster0.xxxxx.mongodb.net` with your actual cluster URL

### 4. Set up the Frontend

```bash
cd ../frontend
npm install
```

## Running the Application

### 1. Start the Backend Server
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

### 2. Start the Frontend
Open a new terminal window:
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

## Todo Model

```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  completed: Boolean (default: false),
  priority: String (enum: ['low', 'medium', 'high'], default: 'medium'),
  createdAt: Date,
  updatedAt: Date
}
```

## Usage

1. **Add a Todo**: Click on the input field and type your todo title. Optionally add a description and set priority.
2. **Mark as Complete**: Click the checkbox next to any todo to mark it as completed.
3. **Edit a Todo**: Click the "Edit" button on any todo to modify its details.
4. **Delete a Todo**: Click the "Delete" button to remove a todo.
5. **Filter Todos**: Use the filter tabs to view All, Pending, or Completed todos.

## Development Scripts

### Backend
- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with nodemon

### Frontend
- `npm start` - Start the React development server
- `npm run build` - Build the app for production
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Troubleshooting

### Common Issues

1. **MongoDB Atlas Connection Error**: 
   - Verify your connection string in `.env` is correct
   - Check if your IP address is whitelisted in MongoDB Atlas
   - Ensure your database username/password are correct
   - Try using `0.0.0.0/0` for IP whitelist during development

2. **CORS Issues**: The backend is configured to allow all origins for development.

3. **Port Conflicts**: If port 5000 or 3000 is already in use, modify the ports in the respective configuration files.

4. **Network Issues**: If you're behind a firewall, MongoDB Atlas uses port 27017.

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify that all dependencies are installed
3. Ensure your MongoDB Atlas connection string is correct
4. Check that both backend and frontend servers are running
5. Test your MongoDB Atlas connection directly

## Future Enhancements

- [ ] User authentication
- [ ] Categories/Tags for todos
- [ ] Due dates
- [ ] Search functionality
- [ ] Drag and drop reordering
- [ ] Dark mode
- [ ] Email notifications
- [ ] Data export/import
