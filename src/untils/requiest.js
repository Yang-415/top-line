import axios from 'axios'
// axios.create方法创建一个和axios本身功能一样的一个对象
const requist = axios.create({
  baseURL: '"http://ttapi.research.itcast.cn/" '// 基础路径
})
export default requist
