# App Vẽ Mạch Điện — Niên Lê

Web app vẽ và mô phỏng mạch điện kiểu CADe SIMU (bản điện thoại), chạy hoàn toàn trên trình duyệt.

## Bản này là bản nào?

Đây là bản điện thoại của app, xuất từ artifact `app-ve-mach-dien-cho-dien-thoai`, phiên bản mới nhất (v17), gồm:

- 107 loại linh kiện theo chuẩn IEC 60617 / CADe SIMU
- Nét vẽ mảnh kiểu CADe SIMU, nối dây vào dây điện cũng được
- Timer On-delay / Off-delay / On-Off / Twin, chỉnh nhanh 5s, 10s
- Chọn cuộn coil thì các tiếp điểm tương ứng hiện ở hàng linh kiện dưới cùng
- CB 1 pha, MCB 3 pha, nguồn điều khiển lấy từ L3 qua cầu chì
- Đèn Run xanh / Fault vàng / Stop đỏ, đèn báo pha L1 đỏ, L2 vàng, L3 xanh
- Mô tơ có điện chuyển xanh, mũi tên quay nằm trong vòng tròn mô tơ
- Mẫu "2 động cơ - Timer R1 R2" theo sơ đồ CADe SIMU của tác giả
- Xoay linh kiện 4 hướng, lưu bản vẽ trên máy (IndexedDB + localStorage)

Bản chính `app-ve-mach-dien` (93 linh kiện, có lưu server) là app fullstack nên không xuất được thành 1 file HTML, vì vậy không dùng bản đó để deploy lên Railway.

Lưu ý: bản vẽ lưu trên trình duyệt của từng người dùng, không đồng bộ lên server.

## Chạy thử trên máy

```bash
node server.js
```

Mở http://localhost:8080 — không cần cài thêm gói nào.

## Deploy lên Railway

1. Đẩy repo này lên GitHub (tạo repo mới, push toàn bộ thư mục này).
2. Vào Railway, bấm **New Project** → **GitHub Repository** → chọn repo này.
3. Railway tự build bằng Dockerfile và chạy `node server.js`.
4. Vào project → service → **Settings** → **Networking** → **Generate Domain** để lấy link công khai.

Không cần thẻ để đăng ký trial Railway: trial $5 trong 30 ngày, sau đó gói Free $1/tháng (tối đa 1 vCPU / 0,5 GB RAM mỗi service, 1 project, 3 service mỗi project).

## Cấu trúc

- `index.html` — toàn bộ app (1 file duy nhất, đã inline tài nguyên)
- `server.js` — server tĩnh Node.js, không cần dependency
- `package.json` — lệnh `npm start` chạy `node server.js`
- `Dockerfile` — build dự phòng cho Railway
- `railway.json` — cấu hình Railway dùng Dockerfile
