# 🎯 兜兜每日提醒

一个功能完整的待办事项和日程管理应用，支持跨设备实时同步。

## ✨ 主要功能

- ✅ **待办事项管理** - 添加、编辑、删除任务
- 🎯 **优先级设置** - 高、中、低三个优先级
- 📅 **日期提醒** - 设置截止日期和提醒
- 🏷️ **分类管理** - 按分类整理任务
- 📱 **跨设备同步** - 手机、平板、电脑无缝切换
- 🔄 **实时同步** - WebSocket 实时更新
- 🔐 **用户认证** - 安全的用户系统
- 📊 **数据统计** - 任务完成统计

## 🚀 快速开始

### 前置要求

- Node.js >= 16.0
- MongoDB (本地或 MongoDB Atlas)
- npm 或 yarn

### 后端设置

```bash
cd backend
npm install
cp .env.example .env
# 编辑 .env 文件，配置 MongoDB URI 和 JWT_SECRET
npm run dev
```

后端服务将运行在 `http://localhost:5000`

### 前端设置

```bash
cd frontend
npm install
npm run dev
```

前端应用将运行在 `http://localhost:5173`

## 📁 项目结构

```
doudou-reminder/
├── backend/
│   ├── models/          # MongoDB 数据模型
│   ├── routes/          # API 路由
│   ├── middleware/      # 中间件
│   ├── socket/          # WebSocket 配置
│   ├── server.js        # 服务器入口
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React 组件
│   │   ├── hooks/       # 自定义 Hooks
│   │   ├── App.tsx      # 主应用组件
│   │   └── main.tsx     # 入口文件
│   └── package.json
└── README.md
```

## 🛠️ 技术栈

### 前端
- **框架**: React 18 + TypeScript
- **构建**: Vite
- **样式**: Tailwind CSS
- **HTTP 客户端**: Axios
- **实时通信**: Socket.io Client

### 后端
- **运行时**: Node.js
- **框架**: Express.js
- **数据库**: MongoDB + Mongoose
- **实时通信**: Socket.io
- **认证**: JWT (JSON Web Tokens)
- **加密**: bcryptjs

## 📚 API 文档

### 认证接口

#### 注册
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### 登录
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 待办事项接口

#### 获取所有任务
```bash
GET /api/todos
Authorization: Bearer <token>
```

#### 创建任务
```bash
POST /api/todos
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "学习 React",
  "description": "完成 React 高级特性学习",
  "priority": "high",
  "dueDate": "2024-12-31",
  "category": "学习"
}
```

#### 更新任务
```bash
PUT /api/todos/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "更新后的标题",
  "completed": true
}
```

#### 删除任务
```bash
DELETE /api/todos/:id
Authorization: Bearer <token>
```

## 🌐 部署指南

### 前端部署 (Vercel)

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量: `VITE_API_URL`
3. 自动部署完成

### 后端部署 (Railway)

1. 创建 Railway 项目
2. 连接 GitHub 仓库
3. 配置环境变量:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
4. 自动部署完成

### 数据库 (MongoDB Atlas)

1. 注册 MongoDB Atlas
2. 创建集群
3. 获取连接字符串
4. 配置到后端环境变量

## 📖 常见问题

**Q: 如何重置密码？**
A: 当前版本不支持密码重置，请重新注册。

**Q: 支持离线使用吗？**
A: 当前版本需要网络连接，离线支持在规划中。

**Q: 数据会丢失��？**
A: 所有数据存储在 MongoDB，不会丢失。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 💬 联系方式

有问题或建议？欢迎提出 Issue。

---

**祝你使用愉快！🎉**