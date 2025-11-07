# Project Management API

Bu proje, Angular uygulaması için oluşturulmuş bir .NET 9 Web API backend'idir. In-memory veritabanı kullanarak Departman, Proje ve Task yönetimi sağlar.

## Özellikler

- ✅ In-memory veri saklama
- ✅ Tüm CRUD işlemleri (Create, Read, Update, Delete)
- ✅ CORS desteği (tüm originlere izin verir)
- ✅ RESTful API tasarımı
- ✅ Temiz kod mimarisi (Repository Pattern)
- ✅ .NET 9 teknolojisi

## Teknolojiler

- .NET 9
- ASP.NET Core Web API
- C# 12

## API Endpoints

### Departments (Departmanlar)

- `GET /api/departments` - Tüm departmanları listele
- `GET /api/departments/{id}` - ID'ye göre departman getir
- `POST /api/departments` - Yeni departman oluştur
- `PUT /api/departments/{id}` - Departman güncelle
- `DELETE /api/departments/{id}` - Departman sil

### Projects (Projeler)

- `GET /api/projects` - Tüm projeleri listele
- `GET /api/projects/{id}` - ID'ye göre proje getir
- `POST /api/projects` - Yeni proje oluştur
- `PUT /api/projects/{id}` - Proje güncelle
- `DELETE /api/projects/{id}` - Proje sil

### Tasks (Görevler)

- `GET /api/tasks` - Tüm görevleri listele
- `GET /api/tasks/{id}` - ID'ye göre görev getir
- `POST /api/tasks` - Yeni görev oluştur
- `PUT /api/tasks/{id}` - Görev güncelle
- `DELETE /api/tasks/{id}` - Görev sil

## Çalıştırma

### Gereksinimler

- .NET 9 SDK

### Projeyi Çalıştırma

```bash
dotnet run
```

API varsayılan olarak `http://localhost:5141` adresinde çalışacaktır.

### Build

```bash
dotnet build
```

## Veri Modelleri

### Department
```json
{
  "id": 1,
  "name": "IT Department"
}
```

### Project
```json
{
  "id": 1,
  "name": "E-Commerce Platform",
  "description": "Building a modern e-commerce platform",
  "startDate": "2024-01-15T00:00:00",
  "completedPercent": 45,
  "departmentId": 1,
  "tasks": []
}
```

### Task
```json
{
  "id": 1,
  "name": "Database Design",
  "description": "Design database schema",
  "expectedDate": "2024-02-01T00:00:00",
  "projectId": 1,
  "isDone": true
}
```

## Örnek Kullanım

### Tüm projeleri getir
```bash
curl http://localhost:5141/api/projects
```

### Yeni departman oluştur
```bash
curl -X POST http://localhost:5141/api/departments \
  -H "Content-Type: application/json" \
  -d '{"name":"Sales Department"}'
```

### Proje güncelle
```bash
curl -X PUT http://localhost:5141/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Updated Project",
    "description":"Updated description",
    "startDate":"2024-01-15T00:00:00",
    "completedPercent":60,
    "departmentId":1
  }'
```

## CORS Yapılandırması

API, tüm originlere (Angular uygulamanız dahil) CORS erişimine izin verecek şekilde yapılandırılmıştır.

## Proje Yapısı

```
projectManagement.API/
├── Controllers/          # API Controller'ları
│   ├── DepartmentsController.cs
│   ├── ProjectsController.cs
│   └── TasksController.cs
├── Models/              # Veri Modelleri
│   ├── Department.cs
│   ├── Project.cs
│   └── Task.cs
├── Repositories/        # Repository Pattern
│   ├── IRepository.cs
│   ├── InMemoryDepartmentRepository.cs
│   ├── InMemoryProjectRepository.cs
│   └── InMemoryTaskRepository.cs
└── Program.cs          # Uygulama başlangıç noktası
```

## Notlar

- Veriler in-memory olarak saklanır, uygulama yeniden başlatıldığında varsayılan veriler yüklenir.
- Repository'ler Singleton olarak kaydedilmiştir.
- Tüm endpoint'ler async/await pattern kullanır.
- Model validation otomatik olarak yapılır.
