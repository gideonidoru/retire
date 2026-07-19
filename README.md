# Assembled

**Your retirement, assembled.** A free federal + military retirement calculator that runs entirely in your browser.

**Live: [i6dev.com/retire](https://i6dev.com/retire/)** — no signup, no ads, nothing for sale, and nothing you type ever leaves your device.

---

## Why this exists

Generic retirement calculators don't know what a FERS annuity is. The good federal tools bury you in nine sections of inputs, and almost nothing models the population this tool was built for: **military retirees and veterans now in federal civilian service.** That overlap — the buyback decision, CRDP, tax-free VA compensation stacked against a FERS annuity — is where the six-figure decisions live, and where no good tool existed.

Assembled models both systems and their interactions, then goes further: it doesn't just project your numbers, it prices your *decisions*.

## How it works

You walk through seven short sections, entering only numbers you can read off documents you already have — your DFAS statement, SF-50, LES, ssa.gov statement, TSP balance, VA award letter. The tool owns every projection. Sections that don't apply mark themselves n/a and step aside; a pure civilian and a pure military retiree both get a coherent path.

As you type, **the Stack** — your combined monthly retirement income, one color per stream — updates live in a pinned panel, along with your after-tax figure, guaranteed floor, and recommended retirement age.

### The full picture

- **Income by age** — every stream stacked from now to your planning horizon, with hover/tap readouts, SS claim and depletion markers, and your goal line.
- **Net worth by age** — accounts *plus the present value of your pensions*, vested honestly: military pay and VA count from when they're received; FERS enters only at your retirement age.
- **A recommendation** — set a goal income ($ or % of salary) and the engine walks every retirement age from 40 to 70, finds the first one whose streams cover the goal in *every* year of the plan, and names the age where working longer hits diminishing returns.
- **A planning horizon built from you** — an SSA life-table estimate (age, sex, income-adjusted) plus a safety buffer, instead of a hardcoded age.

### What if?

A decisions chapter that answers the questions people actually argue about:

- **Spend it down** — the maximum draw rate that empties your accounts right at the horizon, what that pays monthly, and the earlier retirement it unlocks.
- **Claim Social Security later?** — cumulative lifetime totals for 62 / FRA / 70 with the crossover ages, tied to your lifespan estimate.
- **Buy back your military time?** — the net monthly effect (waiver included), the estimated deposit, and the break-even age. Shown while the decision is still open.
- **Assumptions wrong?** — a stress test: inflation at 4%, growth halved, living to 100 — pass/fail against your goal.
- **Retire somewhere else?** — all 50 states plus popular expat destinations (Portugal, Mexico, Costa Rica, Thailand…), ranked by after-tax income for *your* mix, military exemptions included.
- **Leave federal service?** — the private-sector salary that breaks even on everything walking away forfeits: remaining accrual years, the match stream, the 1.1% upgrade on banked years, net of FERS withholding.

## What it models

| Area | Depth |
|---|---|
| **FERS** | MRA by birth year; every eligibility path (62+5, 60+20, MRA+30, MRA+10 with exact reductions, deferred); special provisions (LEO/FF/ATC/CBP, 1.7%, immediate SRS); already-separated support (frozen service, deferred rules); the SRS on civilian years only; sick-leave credit incl. the 1.1% test (OPM BAL 18-103); survivor elections; the pre-62 COLA gap and diet COLA modeled in real terms |
| **Military** | Receiving / will-retire / separated paths; High-3 (75% cap) and BRS; buyback with waiver math; per-state retired-pay tax exemptions |
| **VA** | Ratings 10–100% with the full dependent matrix; tax-free everywhere it should be |
| **Social Security** | FRA by birth year and SSA's exact claim factors; one number straight off your statement |
| **TSP** | 2026 IRS limits with age-based catch-ups; %-of-salary, dollar, or max-every-year contributions; the real agency match formula; Roth share; RMDs at 73 (Uniform Lifetime Table); Rule of 55 / public-safety / SECURE 2.0 warnings |
| **Taxes** | 2026 federal brackets, standard deduction incl. 65+, up-to-85% SS taxability, per-state treatment from a 50-state (+ abroad) data file, Medicare Part B with IRMAA tiers |
| **Lifespan** | SSA life table by age and sex, income-adjusted; drives every horizon in the tool |

All figures in **today's dollars** — growth assumptions are "above inflation," with one labeled line showing what the checks will nominally read in your retirement year. The assumptions behind everything (inflation, lifespan buffer, horizon, guaranteed-income discount rate) are exposed as **dials** you can turn.

## Honesty policy

Every simplification is labeled inline where it applies, with the direction of its error where known. Current salary stands in for high-3 (a conservative floor). The buyback deposit is an estimate until you enter the DFAS figure. VA tables are approximate for 2026. State rates are flat effective estimates. The lifespan figure is a statistical average, not a prediction. This is an estimate machine, not advice — and it says so.

The math is locked by **129 automated tests**, including golden tests against published OPM computation examples, SSA's exact reduction/credit factors, the TSP match schedule, and the DFAS formula.

## Privacy

There is no server. No accounts, no analytics, no tracking. Everything computes in your browser and saves only to your browser's local storage. Exports (XLSX with live formulas, JSON, the print report) are generated locally. **Share links** pack your full plan into the URL fragment — fragments are never transmitted to any server, so even sharing stays client-side (the link itself contains your numbers; share deliberately). Installed as a PWA, it works fully offline.

## For developers

Vanilla JavaScript, no framework, no runtime dependencies. One state object → one pure compute pass → an idempotent render. The production build is a single self-contained HTML file (plus a service worker and manifest).

```
npm install
npm run dev      # local dev server
npm test         # vitest — 129 tests; correctness is the product
npm run build    # dist/ → index.html + sw.js + manifest.webmanifest
```

```
src/state.js       one state object, blank defaults, the example persona
src/compute/       pure domain math — FERS paths, streams, the year-by-year
                   simulation (RMDs, COLA erosion), taxes, lifespan, the
                   optimizer and every What-if solver
src/data/          year-indexed tables: VA rates, IRS limits, tax brackets,
                   Medicare/IRMAA, RMD divisors, state rules, life table —
                   the annual January update is a data PR, not code
src/ui/            render, hi-DPI canvas charts with crosshairs, the living
                   background, print report, XLSX writer (dependency-free
                   zip + SpreadsheetML), share-link codec, glossary
test/              unit, property, snapshot, and golden tests
```

Design rules, if you contribute: inputs must be readable off a statement the user already has; every simplification gets labeled where it bites; nothing ever transmits user data; no emojis.

## Roadmap

Spouse and dual-fed household modeling → survivor scenarios (SBP/DIC — the military side no other tool prices) → FERS disability retirement → FEHB/TRICARE premium comparison → Roth conversion ladder.

**Not** on the roadmap: accounts, backends, ads, affiliate anything, or advice.

## Feedback

Found a case it gets wrong? [Open an issue](https://github.com/gideonidoru/retire/issues) — real reports get fixed.

---

*Assembled is not affiliated with OPM, DFAS, the VA, SSA, or any government agency. It produces planning estimates in today's dollars — verify against your official statements before deciding anything that matters.*
