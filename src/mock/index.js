import Mock from "mockjs";

Mock.mock("api/newNotice", "get", {
  code: 200,
  msg: "success",
  "data|5": [
    {
      boolean: "@boolean",
      text: "@cparagraph(1,3)"
    }
  ]
});
