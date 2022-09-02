export const Constant = {
  USER_ROLE: {
    SUPER_ADMIN: "SuperAdmin",
    ADMIN: "Admin",
    USER: "USER",
    MANAGER: "MANAGER",
  },

  TASK: {
    STATUS: {
      1: "ACTIVE",
      0: "IN_ACTIVE",
      2: "CLOSED",
    },
    PROGRESS: {
      0: "Backlog", // BACKLOG
      1: "In-progress", // IN_PROGRESS
      2: "Review", // QA
      3: "Completed",
    },
    PRIORITY: {
      0: "Low", // LOW
      1: "Medium", // MEDIUM
      2: "High", // HIGH
    },
  },
  PROJECT: {
    STATUS: {
      0: "Deleted", // INACTIVE
      1: "On Going", // ACTIVE
      2: "Completed", // CLOSED
      3: "Archived", // TODO: have to add this in api constant file as well
    },
    STATUS_VALUE: {
      DELETED: 0, // INACTIVE
      ON_GOING: 1, // ACTIVE
      COMPLETED: 2, // CLOSED
      ARCHIVED: 3,
    },
    INVITE_STATUS: {
      0: "Pending", // INVITED
      1: "Re-Invited", // REINVITED
      2: "Accepted",
      3: "Rejected", // DECLINED
    },
    INVITE_STATUS_TEXT: {
      PENDING: 0,
      RE_INVITED: 1,
      ACCEPTED: 2,
      REJECTED: 3,
    },
    ICON: {
      STRENGTH: "/assets/icons/strength.svg",
      SWIMMING_POOL: "/assets/icons/swimming-pool.svg",
      TREADMILL: "/assets/icons/treadmill.svg",
      DUMBBELL: "/assets/icons/dumbbell.svg",
      HEALTHY_FOOD: "/assets/icons/healthy-food.svg",
      MP3: "/assets/icons/mp3.svg",
      NO_FAST_FOOD: "/assets/icons/no-fast-food.svg",
      NO_SWEETS: "/assets/icons/no-sweets.svg",
      CALENDER: "/assets/icons/calendar.svg",
      USER: "/assets/icons/user.svg",
      USERTIME: "assets/icons/user-time.svg",
      CLOCK: "assets/icons/clock.svg",
      DOCUMENT: "assets/icons/document.svg",
      CHEKLIST: "assets/icons/list-check.svg",
      COLLABORATORSMAN: "assets/icons/man-head.svg",
      ADD: "assets/icons/add.svg",
      PROGRESS: "assets/icons/archive.svg",
      FILECHECK: "assets/icons/file-check.svg",
      UPLOAD:"assets/icons/upload.svg",
      COMMENT:"assets/icons/comment.svg",
      FILTER:"assets/icons/settings-sliders.svg",

    },
  },
  ORGANIZATION: {
    INVITE_STATUS: {
      1: "Accepted",
      2: "Pending", // INVITED
      // 0: "Pending", //REINVITED
      0: "Rejected", // DECLINED
      "-1": "Removed",
    },
  },
  EDITOR: {
    BLANK: "<p><br></p>",
    PARAGRAPH: "<p></p>",
  },
  COMMENT_TYPE: [
    "New comment added",
    "Comment removed",
    "New file added in comment",
    "File removed from comment",
  ],
  ALREADY_LOGGED_IN: "You are already logged in",
  ERROR_MESSAGES: {
    ONLY_IMAGE: "You could only upload images.",
    IMAGE_LIMIT: "Please Select a image less than 75kb",
  },
};
