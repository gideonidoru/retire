# Assembled

**Your retirement, assembled.** A free federal + military retirement calculator that runs entirely in your browser.

**Live: [i6dev.com/retire](https://i6dev.com/retire/)** — no signup, no ads, nothing for sale, and nothing you type ever leaves your device.

---

## Why this exists

Generic retirement calculators don't know what a FERS annuity is. The good federal tools bury you in nine sections of inputs, and almost nothing models the population this tool was built for: **military retirees and veterans now in federal civilian service.** That overlap — the buyback decision, CRDP, tax-free VA compensation stacked against a FERS annuity — is where the six-figure decisions live, and where no good tool existed.

Assembled models both systems and their interactions, then goes further: it doesn't just project your numbers, it prices your *decisions*.

## How it works

You walk through eight short sections, entering only numbers you can read off documents you already have — your DFAS statement, SF-50, LES, ssa.gov statement, TSP balance, VA award letter. The tool owns every projection. Sections that don't apply mark themselves n/a and step aside; a pure civilian and a pure military retiree both get a coherent path.

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
- **Retire somewhere else?** — all 50 states plus popular expat destinations (Portugal, Mexico, Costa Rica, Thailand…), ranked by what your after-tax income actually *spends like* — state taxes and cost of living together, military exemptions included. Abroad, the honest caveats travel with it: Medicare doesn't follow you, but a VA rating does (the Foreign Medical Program covers service-connected care worldwide).
- **Leave federal service?** — the private-sector salary that breaks even on everything walking away forfeits: remaining accrual years, the match stream, the 1.1% upgrade on banked years, net of FERS withholding.
- **One of you died first?** — both directions. If you go: what the survivor actually keeps — the FERS survivor annuity from your election, SBP if elected (with DIC stacking since the 2023 offset repeal), the Social Security step-up, their streams, the inherited draw — with the gap named. If they go: the widow's tax trap, quantified — nearly the same income refiled single, with the effective-rate jump shown.
- **Converted to Roth in the gap?** — fill the 12/22/24% bracket in the years between retirement and Social Security, pay the tax cheap, shrink the RMDs. A directional sketch, labeled as such.

## What it models

| Area | Depth |
|---|---|
| **FERS** | MRA by birth year; every eligibility path (62+5, 60+20, MRA+30, MRA+10 with exact reductions — or postponed, starting unreduced at 60 or 62 with sick leave intact; deferred by service — 30 years commences at the MRA, 20 at 60, else 62); VERA early-outs (immediate and unreduced, supplement held to the MRA, VSIP into savings); special provisions (LEO/FF/ATC/CBP, 1.7% on covered service only, a covered-years field for job-changers, the 57/56 mandatory-separation flag, immediate SRS); already-separated and already-retired support (frozen service and deferred rules — or your OPM statement gross, verbatim); the annual-leave payout into savings at separation; court-ordered former-spouse apportionment off the top; the SRS on civilian years only; sick-leave credit incl. the 1.1% test (OPM BAL 18-103); survivor elections; an optional real salary-growth dial that projects a true high-3; the pre-62 COLA gap and diet COLA modeled in real terms |
| **Military** | Receiving / will-retire / separated paths; High-3 (75% cap) and BRS; Reserve/Guard points-based pay (points ÷ 360, deferred to 60 — earlier with qualifying post-9/11 active duty, and exempt from the buyback waiver); buyback with waiver math and the deposit deducted from savings; CRDP at 50%+ and the sub-50% waiver (CRSC restore); court-ordered former-spouse apportionment (USFSPA); per-state retired-pay tax exemptions |
| **VA** | Ratings 10–100% with the full dependent matrix — or your award letter verbatim (SMC and combinations included); tax-free everywhere it should be |
| **Social Security** | FRA by birth year and SSA's exact claim factors; one number straight off your statement, trimmed honestly if you stop earning early |
| **TSP** | 2026 IRS limits with age-based catch-ups; %-of-salary, dollar, or max-every-year contributions; the real agency match formula (agency money always traditional); the Roth share of both today's balance and new contributions, with the blend evolving as you save; draw start ages and one-time withdrawals; RMDs at 73 or 75 by birth year (SECURE 2.0, Uniform Lifetime Table); Rule of 55 / public-safety warnings with the 10% penalty in the after-tax math |
| **Taxes** | 2026 federal brackets, standard deduction incl. 65+ (gap years correctly excluded), the 2025–28 OBBBA senior deduction with its phase-out, up-to-85% SS taxability, per-state treatment from a 50-state (+ abroad) data file, Medicare Part B with IRMAA tiers |
| **Household** | A spouse's pension (deferred start supported), Social Security (their own FRA and claim age), balance draws with their own RMD forcing, and wages while working; joint taxes and IRMAA; the plan runs to the longer-lived of you |
| **Survivor** | FERS survivor elections (valued from the unreduced annuity), SBP at 55% with its 6.5% premium charged while living, DIC, the SS step-up, inherited accounts |
| **Disability** | FERS disability retirement: 60% year one, 40% minus the SSDI offset to 62, the earned-annuity floor, and the age-62 recompute with disability years credited |
| **Health** | FEHB self / Self + 1 / family vs TRICARE (or both), premiums netted from income, with a step-down to Self + 1 when dependents age off and the FEHB 5-year rule flagged |
| **Lifespan** | SSA life table by age and sex, income-adjusted; drives every horizon in the tool — for households, the longer-lived spouse sets it |

All figures in **today's dollars** — growth assumptions are "above inflation," with one labeled line showing what the checks will nominally read in your retirement year. The assumptions behind everything (inflation, lifespan buffer, horizon, guaranteed-income discount rate, career start, real salary growth) are exposed as **dials** you can turn.

## Honesty policy

Every simplification is labeled inline where it applies, with the direction of its error where known. Current salary stands in for high-3 unless you set the salary-growth dial (a conservative floor). The buyback deposit is an estimate until you enter the DFAS figure — either way it's deducted from your savings, because it's real money. VA tables are the official 2026 rates, verified against va.gov. State rates and cost-of-living indexes are coarse estimates. The lifespan figure is a statistical average, not a prediction. This is an estimate machine, not advice — and it says so.

The math is locked by **194 unit tests and a browser smoke suite**, including golden tests against published OPM computation examples, SSA's exact reduction/credit factors, the TSP match schedule, and the DFAS formula.

## Privacy

There is no server. No accounts, no analytics, no tracking. Everything computes in your browser and saves only to your browser's local storage. Exports (XLSX with live formulas, JSON, the print report) are generated locally. **Share links** pack your full plan into the URL fragment — fragments are never transmitted to any server, so even sharing stays client-side (the link itself contains your numbers; share deliberately). Installed as a PWA, it works fully offline.

## For developers

Vanilla JavaScript, no framework, no runtime dependencies. One state object → one pure compute pass → an idempotent render. The production build is a single self-contained HTML file (plus a service worker and manifest).

```
npm install
npm run dev      # local dev server
npm test         # vitest — 194 tests; `npm run test:e2e` boots the built app in Chromium; correctness is the product
npm run build    # dist/ → index.html + sw.js + manifest.webmanifest + README
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

The original roadmap — spouse/dual-fed households, survivor scenarios in both directions (SBP/DIC and the widow's tax trap), FERS disability, FEHB/TRICARE comparison, and the Roth conversion ladder — has shipped. Next: upgrading the early-stop Social Security adjustment from bend-point inversion to a full AIME/PIA engine, and the January data refresh each year. A built-in staleness guard flags the footer if the tables' year falls behind the calendar. FEGLI is parked unless users ask.

**Not** on the roadmap: accounts, backends, ads, affiliate anything, or advice.

## Feedback

Found a case it gets wrong? [Open an issue](https://github.com/gideonidoru/retire/issues) — real reports get fixed.

---

*Assembled is not affiliated with OPM, DFAS, the VA, SSA, or any government agency. It produces planning estimates in today's dollars — verify against your official statements before deciding anything that matters.*
