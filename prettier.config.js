// prettier.config.js
module.exports = {
  // Đảm bảo rằng bạn sử dụng dấu chấm phẩy và không có dấu chấm phẩy
  semi: false, // ESLint: semi: [1, 'never']

  // Sử dụng dấu nháy đơn thay vì dấu nháy kép
  singleQuote: true, // ESLint: quotes: ['error', 'single']

  // Đặt cách căn lề cho các đối tượng là 2 ký tự
  tabWidth: 2, // ESLint: indent: ['warn', 2]

  // Đảm bảo không có khoảng trắng trước và sau dấu ngoặc nhọn
  bracketSpacing: true, // ESLint: object-curly-spacing: [1, 'always']

  // Đặt khoảng cách cho các dấu ngoặc vuông
  bracketSameLine: false, // ESLint: array-bracket-spacing: 1

  // Đặt khoảng cách giữa các dấu phẩy
  commaSpacing: true, // ESLint: comma-spacing: 1

  // Sử dụng khoảng trắng trước và sau dấu ngoặc
  arrowParens: 'always', // ESLint: arrow-spacing: 1

  // Đảm bảo không có khoảng trắng trước dấu chấm
  trailingComma: 'none', // ESLint: comma-dangle: 1

  // Đảm bảo sử dụng LF cho kiểu dòng mới
  endOfLine: 'lf' // ESLint: linebreak-style: 0
}
