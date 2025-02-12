export const NodeTreeData = {
    // Thông tin về ông A
    //PersonID: ID của người đó bên Person.js
    // - mid: ID của mẹ
    // - fid: ID của cha
    // - pids: ID của vợ/chồng
  "NodeTree": [
    {"NodeID":1,"PersonID":1,"pids":[2],"mid":3,"fid":4},

    // Thông tin về bà B
    {"NodeID":2,"PersonID":2,"pids":[1],"mid":4,"fid":3},

    // Thông tin về ông C
    {"NodeID":3,"PersonID":3,"pids":[5],"mid":5,"fid":null},

    // Thông tin về bà D
    {"NodeID":4,"PersonID":4,"pids":[3],"mid":null,"fid":5}
  ]
}