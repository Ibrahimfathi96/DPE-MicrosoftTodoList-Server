const mongoose = require("mongoose");
const COLORS = require("../utils/colors");

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      trim: true
    },
    email: {
      required: true,
      type: String,
      trim: true
    },
    password: {
      required: true,
      type: String
    },
    image: {
      type: String,
      default: ""
    },
    listOfTodos: {
      type: [
        {
          name: {
            required: true,
            type: String
          },
          iconName: {
            type: String,
            default: "toc"
          },
          iconColor: {
            type: String,
            enum: [
              COLORS.DEFAULT,
              COLORS.WHITE,
              COLORS.BLACK,
              COLORS.GREY,
              COLORS.LIGHT_GREY,
              COLORS.DARK_GREY,
              COLORS.BLUE,
              COLORS.LIGHTER_PINK,
              COLORS.LIGHT_PINK,
              COLORS.PINK,
              COLORS.TURQUOISE,
              COLORS.ORANGE,
              COLORS.DARK_GREEN,
              COLORS.LIGHT_GREEN,
              COLORS.LIGHTER_GREEN,
              COLORS.DARK_RED,
              COLORS.YELLOW
            ],
            default: COLORS.DEFAULT
          },
          iconType: {
            type: String,
            default: "material"
          },
          backgroundColor: {
            type: String,
            enum: [
              COLORS.DEFAULT,
              COLORS.WHITE,
              COLORS.BLACK,
              COLORS.GREY,
              COLORS.LIGHT_GREY,
              COLORS.DARK_GREY,
              COLORS.BLUE,
              COLORS.LIGHTER_PINK,
              COLORS.LIGHT_PINK,
              COLORS.PINK,
              COLORS.TURQUOISE,
              COLORS.ORANGE,
              COLORS.DARK_GREEN,
              COLORS.LIGHT_GREEN,
              COLORS.LIGHTER_GREEN,
              COLORS.DARK_RED,
              COLORS.YELLOW
            ],
            default: COLORS.DEFAULT
          },
          todos: {
            type: [
              {
                todoTitle: String,
                todoDesc: {
                  type: String,
                  default: ""
                },
                isDone: {
                  type: Boolean,
                  default: false
                }
              }
            ],
            default: []
          }
        }
      ],
      default: [
        {
          name: "My Day",
          iconName: "wb-sunny",
          iconColor: COLORS.LIGHT_GREY,
          backgroundColor: COLORS.DARK_GREEN,
          iconType: "material",
          todos: [
            {
              todoTitle: "Learn React Native",
              todoDesc: "3 Hours Of Learning React Native",
              isDone: false
            },
            {
              todoTitle: "Read some Books",
              todoDesc: "1 Hour Of Reading",
              isDone: false
            },
            {
              todoTitle: "WorkOut",
              todoDesc: "go to gym for 1 hour",
              isDone: false
            },
            {
              todoTitle: "Read qura'n",
              todoDesc: "30 mins of reading qura'an",
              isDone: false
            },
            {
              todoTitle: "Learn something new",
              todoDesc: "",
              isDone: false
            }
          ]
        },
        {
          name: "Important",
          iconName: "star-border",
          iconColor: COLORS.DARK_RED,
          backgroundColor: COLORS.LIGHTER_PINK,
          iconType: "material",
          todos: [
            {
              todoTitle: "",
              todoDesc: "",
              isDone: false
            }
          ]
        },
        {
          name: "Planned",
          iconName: "calendar-today",
          iconColor: COLORS.DARK_GREEN,
          backgroundColor: COLORS.LIGHTER_GREEN,
          iconType: "material",
          todos: [
            {
              todoTitle: "",
              todoDesc: "",
              isDone: false
            }
          ]
        },
        {
          name: "Assigned to me",
          iconName: "person",
          iconColor: COLORS.DARK_GREEN,
          backgroundColor: COLORS.LIGHTER_GREEN,
          iconType: "material",
          todos: [
            {
              todoTitle: "",
              todoDesc: "",
              isDone: false
            }
          ]
        },
        {
          name: "Flagged emails",
          iconName: "outlined-flag",
          iconColor: COLORS.DARK_GREEN,
          backgroundColor: COLORS.DEFAULT,
          iconType: "material",
          todos: [
            {
              todoTitle: "",
              todoDesc: "",
              isDone: false
            }
          ]
        },
        {
          name: "Tasks",
          iconName: "check-box",
          iconColor: COLORS.GREY,
          backgroundColor: COLORS.DEFAULT,
          iconType: "material",
          todos: [
            {
              todoTitle: "",
              todoDesc: "",
              isDone: false
            }
          ]
        },
        {
          name: "Getting started",
          iconName: "hand-wave-outline",
          iconColor: COLORS.YELLOW,
          backgroundColor: COLORS.DEFAULT,
          iconType: "material-community",
          todos: [
            {
              todoTitle: "Break this task into smaller steps",
              todoDesc: "0 of 1",
              isDone: true
            },
            {
              todoTitle:
                "Tap all the circles in this list to complete your tasks",
              todoDesc: "",
              isDone: true
            },
            {
              todoTitle:
                "Check out our sample grocery list and customise it for yourself",
              todoDesc: "",
              isDone: true
            },
            {
              todoTitle: "Add #hastags to a task's title to categorise it",
              todoDesc: "",
              isDone: true
            },
            {
              todoTitle: "Open this task's detail view to add it to My Day",
              todoDesc: "",
              isDone: true
            },
            {
              todoTitle: "👉 Select this task to add a reminder and due date",
              todoDesc: "",
              isDone: true
            },
            {
              todoTitle: "Add your first task by clicking on ➕ Add a task",
              todoDesc: "",
              isDone: true
            }
          ]
        },
        {
          name: "Groceries",
          iconName: "cart-variant",
          iconColor: COLORS.DARK_GREEN,
          backgroundColor: COLORS.ORANGE,
          iconType: "material-community",
          todos: [
            {
              todoTitle: "Learn React Native",
              todoDesc: "3 Hours Of Learning React Native",
              isDone: false
            },
            {
              todoTitle: "Read some Books",
              todoDesc: "1 Hour Of Reading",
              isDone: false
            },
            {
              todoTitle: "WorkOut",
              todoDesc: "go to gym for 1 hour",
              isDone: false
            },
            {
              todoTitle: "Read qura'n",
              todoDesc: "30 mins of reading qura'an",
              isDone: false
            },
            {
              todoTitle: "Learn something new",
              todoDesc: "",
              isDone: false
            }
          ]
        }
      ]
    }
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
