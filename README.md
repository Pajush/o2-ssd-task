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