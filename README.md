# O2 SSD - 🧩 Zadání úkolu

## 🧠 Kontext

V rámci aplikace `o2-ssd-task` již existuje stránka zobrazující seznam knih (`BooksPage.tsx` a `BooksTable.tsx`).  
Tvým úkolem je vytvořit obdobnou stránku pro **autory**, při zachování stejné struktury, logiky a vizuálního stylu.

---

## ✅ Cíl

Vytvořit dvě nové součásti aplikace:

- `client/src/pages/AuthorsPage.tsx` – stránka pro přehled autorů
- `client/src/components/AuthorsTable.tsx` – tabulka s vyhledáváním, filtrováním a stránkováním
- `server/src/authors/authors.controller.ts` – api na be

---

## 🔧 Technické požadavky

### Frontend:
- Použít stejnou architekturu jako v `BooksPage.tsx`
- Zobrazit sloupce: jméno, příjmení, datum narození, národnost
- Implementovat:
  - základní vyhledávání (`TextField + Button`)
  - tabulku s `DataGrid` (`@mui/x-data-grid`)
  - stránkování (6 řádků na stránku)
- Typy definovat (`Author`)
- **Použít hook `useGetAuthors()` s endpointem `http://localhost:3000/authors`** případně použít mocky

### Backend:
- Ve složce `authors/` už jsou hotové entity, schema, repository, modul
- **Chybí pouze `authors.controller.ts` – ten je potřeba vytvořit**
- Můžeš se inspirovat existujícím `books.controller.ts`:

---

## 🛠 Zadání a časování

### 🔹 Fáze 1: Úvod (15 minut)

- Pomůžeme ti spustit projekt a Docker
- Ukážeme strukturu
- Ujasníme si očekávání

### 🔹 Fáze 2: Samotný úkol (30 minut)

- Máš 30 minut na implementaci výše uvedené stránky

---

## 🔗 Repozitář

Repozitář se zadáním:  
🔗 **https://github.com/Pajush/o2-ssd-task**

---

## 💡 Tipy na závěr

- Není nutné dokončit všechno – ukázka přemýšlení je často důležitější než finální výsledek.
- Pokud něco nefunguje, zkus najít důvod a popsat ho – i to je důležitý skill.
- Buď klidně kreativní – drž se základní struktury, ale můžeš navrhnout drobná zlepšení.

Hodně štěstí! 🚀


## Pomocné stránky dokumentace
- 🔗  https://mui.com/x/react-data-grid/
- 🔗  https://mui.com/material-ui/react-text-field/
- 🔗  https://docs.nestjs.com/controllers

## 🚀 Jak projekt spustit

### 1. 🔌 Naklonuj repozitář

```bash
git clone https://github.com/Pajush/o2-ssd-task.git
cd o2-ssd-task
pnpm install
```

### 2. 🔌 Připrav si .env soubory z .env.example

### 3.  🐘 Spusť databázi pomocí Dockeru

```bash
docker-compose up -d
```

### 4. 🛠 Spusť migrace (Drizzle)

Pokud ještě nemáš vytvořené tabulky, spusť migrace podle TypeScript schémat:

```bash
npx drizzle-kit migrate
```

Ujisti se, že máš správně nastavený DATABASE_URL v .env.


### 5. 💻 Spusť turbo

Nad hlavní složkou spusť turbo, které spustí frontend i backend zároveň přes:

```bash
pnpm dev
```

- Frontend poběží na http://localhost:5173. 
- API poběží na http://localhost:3000.



## 🛠 Když něco nefunguje

### 1. 🧱 Pokud nevidíš data

Z VS Code terminálu vejdi do docker kontaineru

```bash
docker exec -it o2-ssd-data-db psql -U o2-ssd -d o2-ssd
```

Zkontroluj si jestli máš tabulky v databázi

```bash
\dt
```

Zkontroluj si konkrétní tabulku

```bash
\dt books
```

Pokud nemáš tabulky vytvoř si je takhle:

```bash
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    birthdate DATE,
    nationality VARCHAR(50)
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author_id INT REFERENCES authors(id),
    isbn VARCHAR(20),
    genre VARCHAR(50),
    published_date DATE,
    publisher VARCHAR(100),
    language VARCHAR(50),
    page_count INT,
    availability BOOLEAN,
    rating DECIMAL(2,1)
);
```

Data do vyplnění si přidej přes:

```bash
INSERT INTO authors (first_name, last_name, birthdate, nationality) VALUES
('George', 'Orwell', '1903-06-25', 'British'),
('J.K.', 'Rowling', '1965-07-31', 'British'),
('Stephen', 'King', '1947-09-21', 'American'),
('Agatha', 'Christie', '1890-09-15', 'British'),
('Haruki', 'Murakami', '1949-01-12', 'Japanese');

INSERT INTO books (title, author_id, isbn, genre, published_date, publisher, language, page_count, availability, rating) VALUES
('1984', 1, '9780451524935', 'Dystopie', '1949-06-08', 'Secker & Warburg', 'Angličtina', 328, true, 4.7),
('Harry Potter a Kámen mudrců', 2, '9780747532699', 'Fantasy', '1997-06-26', 'Bloomsbury', 'Angličtina', 223, true, 4.8),
('Osvícení', 3, '9780385121675', 'Horor', '1977-01-28', 'Doubleday', 'Angličtina', 447, false, 4.5),
('Vražda v Orient expresu', 4, '9780007119318', 'Krimi', '1934-01-01', 'Collins Crime Club', 'Angličtina', 256, true, 4.3),
('Norské dřevo', 5, '9780375704024', 'Román', '1987-09-04', 'Kodansha', 'Japonština', 296, true, 4.4);

```


Zkontroluj si data v tabulkách

```bash
SELECT * FROM books LIMIT 10;
SELECT * FROM authors LIMIT 10;
```
