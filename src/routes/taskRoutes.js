const express= require("express")
const router=express.Router();
const taskController=require("../controllers/taskController");
const authenticateToken=require("../middleware/authenticateToken")

//creating a new task
router.post("/",authenticateToken,taskController.createTask);


//get all tasks for the loggedin in user

router.get("/",authenticateToken, taskController.getAllTasks)

//get a specific task by :id

router.get("/:id",authenticateToken,taskController.getTaskById);

//update a task by id
router.put("/:id",authenticateToken,taskController.updateTask);

//delete a task by6 id
router.delete("/:id",authenticateToken, taskController.deleteTask)

module.exports=router;
