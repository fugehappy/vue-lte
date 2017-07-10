module.exports = {
  "page_permissions":"c r u d",
  "roles":[{
    "is_active":true,
    "updated_at":1496625300311,
    "permissions":[{
      "name":"控制台",
      "key":"machine_getone",
      "available_operations":"c r u d"
    },
    {
      "name":"数据清洗",
      "key":"sheets_clean",
      "available_operations":"c r u d"
    },
    {
      "name":"查看报表",
      "key":"report",
      "available_operations":"c r u d"
    },
    {
      "name":"资源列表",
      "key":"resources",
      "available_operations":"c r u d"
    },
    {
      "name":"查询单个工作表的数据",
      "key":"sheets_data_query",
      "available_operations":"c r u d"
    }],
    "name":"test1",
    "id":1,
    "create_user":"admin"
  }, {
    "is_active":true,
    "updated_at":1496625300311,
    "permissions":[{
      "name":"控制台",
      "key":"machine_getone",
      "available_operations":"c r u d"
    },
    {
      "name":"数据清洗",
      "key":"sheets_clean",
      "available_operations":"c r u d"
    },
    {
      "name":"查看报表",
      "key":"report",
      "available_operations":"c r u d"
    },
    {
      "name":"资源列表",
      "key":"resources",
      "available_operations":"c"
    },
    {
      "name":"查询单个工作表的数据",
      "key":"sheets_data_query",
      "available_operations":"c d"
    }],
    "name":"test2",
    "id":2,
    "create_user":"admin"
  }],
  "paging":{
    "current":1,
    "page_size":15,
    "total":1
  }
}
