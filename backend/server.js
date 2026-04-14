// # Purpose: Advanced Professional Express Server UI

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// # Middleware
app.use(cors());
app.use(express.json());

// # MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mern_demo")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// # Test API Route
app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MERN Backend Server</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: radial-gradient(circle at top, #0f2027, #203a43, #2c5364);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: #fff;
}

/* Glass effect container */
.container {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    padding: 40px;
    width: 90%;
    max-width: 520px;
    text-align: center;
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    from {opacity:0; transform: translateY(30px);} 
    to {opacity:1; transform: translateY(0);} 
}

.icon {
    font-size: 60px;
    margin-bottom: 10px;
    animation: float 3s infinite ease-in-out;
}

@keyframes float {
    0%,100% {transform: translateY(0);} 
    50% {transform: translateY(-10px);} 
}

h1 {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: 1px;
}

.status {
    margin: 15px 0;
    padding: 10px 20px;
    border-radius: 50px;
    background: linear-gradient(135deg, #00c9ff, #92fe9d);
    color: #000;
    font-weight: 600;
    display: inline-block;
    box-shadow: 0 0 15px rgba(0,255,200,0.6);
}

.message {
    font-size: 14px;
    opacity: 0.9;
    margin-bottom: 20px;
}

.endpoint {
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 12px;
    margin-top: 20px;
    transition: 0.3s;
}

.endpoint:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

.endpoint strong {
    color: #00e6e6;
}

.url {
    font-family: monospace;
    background: rgba(0,0,0,0.3);
    padding: 5px 8px;
    border-radius: 5px;
    display: inline-block;
    margin-top: 5px;
}

.tech {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.badge {
    padding: 6px 12px;
    border-radius: 20px;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    font-size: 12px;
    font-weight: 500;
}

.footer {
    margin-top: 20px;
    font-size: 12px;
    opacity: 0.7;
}

/* Floating particles */
body::before, body::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
    animation: move 10s infinite alternate;
}

body::before {
    top: -100px;
    left: -100px;
}

body::after {
    bottom: -100px;
    right: -100px;
}

@keyframes move {
    from {transform: translate(0,0);} 
    to {transform: translate(50px,50px);} 
}

</style>
</head>

<body>

<div class="container">

<div class="icon">🚀</div>
<h1>MERN Backend Server</h1>

<div class="status">Server Running Successfully</div>

<div class="message">
Backend is live with MongoDB connection and ready for production-grade development.
</div>

<div class="endpoint">
<strong>GET Endpoint</strong><br>
<span class="url">http://localhost:5000/</span>
<p style="font-size:12px; margin-top:5px;">Returns server status page</p>
</div>

<div class="tech">
<span class="badge">Node.js</span>
<span class="badge">Express</span>
<span class="badge">MongoDB</span>
<span class="badge">Mongoose</span>
<span class="badge">CORS</span>
</div>

<div class="footer">
⚡ Production Ready | Connected to Database
</div>

</div>

</body>
</html>
    `);
});

app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "MERN BACKEND IS CONNECTED SUCCESSFULLY",

        request: {
            method: req.method,
            url: req.originalUrl,
            time: new Date()
        },

        server: {
            status: "OK",
            uptime: process.uptime().toFixed(2) + " seconds"
        }
    });
});

// # Server Port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
