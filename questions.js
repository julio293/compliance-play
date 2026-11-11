// Compliance IQ Play · question bank
// ─────────────────────────────────────────────────────────────────────────────
// All game content lives here, so it can be edited without touching index.html.
// diff: 1 = easy, 2 = medium, 3 = hard. Level 1 draws easy items and Level 5 hard ones (see DIFF in index.html).
// draft: true marks new items that still need a compliance review. Remove the flag once approved.
// Placeholders like {name}, {vendor}, {dept}, {gift}, {data}, {kin}, {official} and {amount} are filled from the
// lists below. A second, different value of the same kind can be written {name2}.
// After editing, run: node tools/check-bank.cjs   (it checks the format and that every level has enough content)
window.QUESTION_BANK = {
  "names": [
    "Maya",
    "Lee",
    "Noah",
    "Priya",
    "Tomás",
    "Aisha",
    "Kenji",
    "Elena",
    "Sam",
    "Grace",
    "Omar",
    "Lina",
    "Ravi",
    "Zoe",
    "Dani",
    "Felix",
    "Nadia",
    "Ben",
    "Ines",
    "Jun",
    "Sara",
    "Kofi",
    "Hana",
    "Leo",
    "Mira",
    "Arjun",
    "Chloe",
    "Yusuf",
    "Tara",
    "Marco"
  ],
  "slots": {
    "vendor": [
      "Bluegate Supplies",
      "Harbor and Pine Catering",
      "Lumen Print Co.",
      "Northfield Freight",
      "Cobalt Cloud Services",
      "Willow Street Interiors",
      "Keystone Security",
      "Brightline Travel",
      "Oakmont Facilities",
      "Silverleaf Consulting",
      "Riverside Tech Rentals",
      "Meridian Staffing"
    ],
    "dept": [
      "Finance",
      "Procurement",
      "Sales",
      "HR",
      "IT",
      "Operations",
      "Marketing",
      "Payments",
      "Customer Support",
      "Facilities"
    ],
    "gift": [
      "a weekend spa package",
      "front-row concert tickets",
      "a new smartwatch",
      "a luxury food hamper",
      "a week at a beach villa",
      "a designer handbag",
      "a top-of-the-range tablet",
      "season tickets to the football"
    ],
    "data": [
      "customer passport scans",
      "payroll records",
      "clients’ home addresses",
      "card numbers from a payment batch",
      "account login details",
      "medical leave notes",
      "customer transaction histories",
      "job applicants’ CVs"
    ],
    "kin": [
      "sibling",
      "cousin",
      "spouse",
      "partner",
      "uncle",
      "best friend",
      "former business partner",
      "brother-in-law"
    ],
    "official": [
      "a customs officer",
      "a licensing inspector",
      "a city planning official",
      "a tax auditor",
      "a port authority clerk",
      "a building inspector"
    ]
  },
  "words": [
    {
      "word": "RISK",
      "tip": "Look for possible harm before you act.",
      "diff": 1
    },
    {
      "word": "DATA",
      "tip": "Protect information throughout its lifecycle.",
      "diff": 1
    },
    {
      "word": "GIFT",
      "tip": "Check the gift policy before accepting.",
      "diff": 1
    },
    {
      "word": "CODE",
      "tip": "A code of conduct guides everyday decisions.",
      "diff": 1
    },
    {
      "word": "CARE",
      "tip": "Take care with other people’s information.",
      "diff": 1
    },
    {
      "word": "DUTY",
      "tip": "Your duty of care extends to customers and colleagues.",
      "diff": 2
    },
    {
      "word": "FAIR",
      "tip": "Fair dealing builds lasting trust.",
      "diff": 1
    },
    {
      "word": "SAFE",
      "tip": "Report hazards so everyone stays safe.",
      "diff": 1
    },
    {
      "word": "RULE",
      "tip": "Rules make expectations clear for everyone.",
      "diff": 1
    },
    {
      "word": "FACT",
      "tip": "Decisions should rest on verified facts.",
      "diff": 1
    },
    {
      "word": "LOCK",
      "tip": "Lock your screen whenever you step away.",
      "diff": 1
    },
    {
      "word": "TEAM",
      "tip": "A strong team raises concerns early.",
      "diff": 1
    },
    {
      "word": "LEAK",
      "tip": "Report a suspected data leak straight away.",
      "diff": 2
    },
    {
      "word": "LOGS",
      "tip": "Logs show who did what, and when.",
      "diff": 2
    },
    {
      "word": "OATH",
      "tip": "Promises to customers deserve to be kept.",
      "diff": 3
    },
    {
      "word": "PLAN",
      "tip": "A response plan turns panic into steps.",
      "diff": 1
    },
    {
      "word": "BIAS",
      "tip": "Check your decisions for hidden bias.",
      "diff": 2
    },
    {
      "word": "CASH",
      "tip": "Large cash transactions deserve a closer look.",
      "diff": 1
    },
    {
      "word": "FEES",
      "tip": "Unexplained fees can hide improper payments.",
      "diff": 2
    },
    {
      "word": "FILE",
      "tip": "File records where the team can find them.",
      "diff": 1
    },
    {
      "word": "FLAG",
      "tip": "Raise a flag when something feels off.",
      "diff": 2
    },
    {
      "word": "FUND",
      "tip": "Client funds stay separate and accounted for.",
      "diff": 2
    },
    {
      "word": "HACK",
      "tip": "Unexpected login prompts can be a hack attempt.",
      "diff": 2
    },
    {
      "word": "HOLD",
      "tip": "A legal hold pauses normal deletion.",
      "diff": 2
    },
    {
      "word": "KEYS",
      "tip": "Never share your keys or passwords.",
      "diff": 1
    },
    {
      "word": "LAWS",
      "tip": "Know the laws that apply to your role.",
      "diff": 2
    },
    {
      "word": "LOAN",
      "tip": "Lending decisions need accurate applicant data.",
      "diff": 2
    },
    {
      "word": "NOTE",
      "tip": "Note down what happened while it is fresh.",
      "diff": 1
    },
    {
      "word": "ROLE",
      "tip": "Access should match your role, nothing more.",
      "diff": 2
    },
    {
      "word": "SCAN",
      "tip": "Scan attachments before you open them.",
      "diff": 2
    },
    {
      "word": "SEAL",
      "tip": "Sealed documents stay confidential.",
      "diff": 2
    },
    {
      "word": "SIGN",
      "tip": "Read before you sign.",
      "diff": 2
    },
    {
      "word": "SPAM",
      "tip": "Report suspicious emails; don’t just delete them.",
      "diff": 2
    },
    {
      "word": "TERM",
      "tip": "Contract terms define what each side owes.",
      "diff": 2
    },
    {
      "word": "TEST",
      "tip": "Test controls to prove they work.",
      "diff": 1
    },
    {
      "word": "USER",
      "tip": "Every user account needs a named owner.",
      "diff": 1
    },
    {
      "word": "WARN",
      "tip": "Heed warnings from your security tools.",
      "diff": 2
    },
    {
      "word": "WIPE",
      "tip": "Wipe old devices before disposal.",
      "diff": 2
    },
    {
      "word": "SCAM",
      "tip": "Urgency and secrecy are classic scam signs.",
      "diff": 2
    },
    {
      "word": "MULE",
      "tip": "Money mules move criminal funds, often unknowingly.",
      "diff": 3
    },
    {
      "word": "WIRE",
      "tip": "Verify wire instructions through a known contact.",
      "diff": 2
    },
    {
      "word": "BANK",
      "tip": "Bank detail changes need independent checks.",
      "diff": 1
    },
    {
      "word": "BOND",
      "tip": "Trust is a bond earned through consistency.",
      "diff": 3
    },
    {
      "word": "VETO",
      "tip": "Anyone can pause a step that feels unsafe.",
      "diff": 3
    },
    {
      "word": "PEER",
      "tip": "A peer review catches what one person misses.",
      "diff": 3
    },
    {
      "word": "MASK",
      "tip": "Mask card numbers and IDs on screen.",
      "diff": 2
    },
    {
      "word": "LINK",
      "tip": "Hover before you click a link.",
      "diff": 1
    },
    {
      "word": "EDIT",
      "tip": "Edits to records should leave a trail.",
      "diff": 1
    },
    {
      "word": "DEBT",
      "tip": "Hidden debts can create pressure to cut corners.",
      "diff": 2
    },
    {
      "word": "TRUE",
      "tip": "Keep records true and complete.",
      "diff": 2
    },
    {
      "word": "MEMO",
      "tip": "A short memo can record a key decision.",
      "diff": 2
    },
    {
      "word": "VOID",
      "tip": "Void unused approvals so they can’t be reused.",
      "diff": 3
    },
    {
      "word": "GATE",
      "tip": "Gatekeepers check before access is granted.",
      "diff": 2
    },
    {
      "word": "WALL",
      "tip": "Information walls keep sensitive deals separate.",
      "diff": 2
    },
    {
      "word": "TONE",
      "tip": "Tone from the top shapes the whole culture.",
      "diff": 2
    },
    {
      "word": "CASE",
      "tip": "Every case deserves the same fair process.",
      "diff": 2
    },
    {
      "word": "CLUE",
      "tip": "Small clues often reveal bigger risks.",
      "diff": 2
    },
    {
      "word": "VOTE",
      "tip": "Declare conflicts before you vote.",
      "diff": 2
    },
    {
      "word": "HELP",
      "tip": "Ask for help when a rule is unclear.",
      "diff": 1
    },
    {
      "word": "PASS",
      "tip": "Passwords should be long and unique.",
      "diff": 1
    },
    {
      "word": "OPEN",
      "tip": "Open conversations prevent hidden problems.",
      "diff": 1
    },
    {
      "word": "TIPS",
      "tip": "Speak-up tips deserve careful follow-up.",
      "diff": 2
    },
    {
      "word": "TIME",
      "tip": "Report incidents in time to make a difference.",
      "diff": 1
    },
    {
      "word": "SHOW",
      "tip": "Show your working: evidence beats memory.",
      "diff": 1
    },
    {
      "word": "LIEN",
      "tip": "A lien is a legal claim on property until a debt is paid.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "TORT",
      "tip": "A tort is a civil wrong that can create liability.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "QUID",
      "tip": "Quid pro quo deals are a classic bribery warning sign.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "SHAM",
      "tip": "A sham deal exists only on paper.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "SKIM",
      "tip": "Skimming takes cash before it is ever recorded.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "RUSE",
      "tip": "Social engineers use a ruse to win your trust.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "DUPE",
      "tip": "Scammers try to dupe staff with false urgency.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "DEED",
      "tip": "Sign deeds only with the proper authority.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "PACT",
      "tip": "A secret pact between rivals can break competition law.",
      "diff": 3,
      "draft": true
    },
    {
      "word": "LEVY",
      "tip": "A levy is a charge set by law. Pay it correctly.",
      "diff": 3,
      "draft": true
    }
  ],
  "risk": {
    "Bribery": [
      {
        "text": "{vendor} offers {name} {gift} if the contract renewal goes their way.",
        "why": "A personal benefit tied to a business decision is an improper inducement.",
        "diff": 1
      },
      {
        "text": "A broker asks {name} to approve a “facilitation fee” of {amount} so {official} will speed up a permit.",
        "why": "A payment to influence an official’s decision is bribery, whatever it is called.",
        "diff": 2
      },
      {
        "text": "{name} in {dept} is promised a job for their {kin} if a tender is steered toward {vendor}.",
        "why": "Offering a favour to a relative in return for a business decision is still a bribe.",
        "diff": 2
      },
      {
        "text": "A distributor suggests adding {amount} to an invoice “for the inspector” who signs off a shipment.",
        "why": "Hidden payments routed through invoices to influence an official are bribery.",
        "diff": 2
      },
      {
        "text": "{vendor} quietly pays for {name}’s family holiday while a pricing review is open.",
        "why": "Hospitality given during a live decision, and kept quiet, is an improper inducement.",
        "diff": 2
      },
      {
        "text": "{name} is told a licence will be approved faster if cash is left in an envelope for {official}.",
        "why": "Cash to speed up an official decision is a bribe.",
        "diff": 1
      },
      {
        "text": "A bidder offers to sponsor {name}’s charity run, on condition that their bid is shortlisted.",
        "why": "A donation that depends on a business outcome is an inducement.",
        "diff": 3
      },
      {
        "text": "After a government contract is won, an agent requests a “success bonus” of {amount} and won’t say who receives it.",
        "why": "Unexplained success fees to third parties near officials are a classic bribery red flag.",
        "diff": 3
      },
      {
        "text": "{vendor} sends {name} {gift} the week before {name} scores their proposal.",
        "why": "A valuable gift timed with a decision is designed to influence it.",
        "diff": 2
      },
      {
        "text": "{official} hints that a fine could “go away” for a personal payment from {name}.",
        "why": "Paying an official personally to avoid a penalty is bribery.",
        "diff": 1
      },
      {
        "text": "A consultant asks {name} to inflate their fee by {amount} so it can be “shared” with a client’s purchasing manager.",
        "why": "Kickbacks passed through inflated fees are bribery.",
        "diff": 3
      },
      {
        "text": "{name} accepts free use of a holiday home from {vendor} in exchange for extending their payment terms.",
        "why": "A personal benefit traded for a commercial concession is an inducement.",
        "diff": 2
      },
      {
        "text": "A supplier offers {name} a personal cut of every order {name} places with them.",
        "why": "Personal commissions for steering orders are kickbacks.",
        "diff": 1
      },
      {
        "text": "To win a hospital contract, a sales rep proposes paying for a buyer’s “study trip” that is mostly sightseeing.",
        "why": "Lavish trips for decision-makers, disguised as business, are inducements.",
        "diff": 3
      },
      {
        "text": "Just before a tender closes, {vendor} offers {name} {amount} in “consulting fees” for a report nobody needs.",
        "why": "Payments for sham services are a common way to disguise bribes.",
        "diff": 3
      },
      {
        "text": "A broker says {name}’s application will clear today if they add a “tip” for {official}.",
        "why": "Small payments to speed up official action are still bribes under most policies.",
        "diff": 1
      },
      {
        "text": "{vendor} offers to repair {name}’s car for free while their framework agreement is up for renewal.",
        "why": "Free personal services during a decision are an inducement.",
        "diff": 2
      },
      {
        "text": "A prospective client asks {name} to provide {gift} for their purchasing head before signing.",
        "why": "Giving valuables to secure a deal is bribery, even when the client asks for it.",
        "diff": 2
      },
      {
        "text": "{vendor}’s account manager offers to pay {name}’s conference fee “as a friend”, a week before {name} picks the new supplier.",
        "why": "Something of value offered around a decision is an inducement, even when it is framed as friendship.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "An agent handling a customs delay asks for {amount} in cash “for expenses” and refuses to give a receipt.",
        "why": "An unexplained cash payment around an official process is a classic bribery red flag.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "{vendor} invites {name} to speak on a panel for an unusually large fee while {vendor}’s contract is under review.",
        "why": "An oversized payment from a supplier under review can work as a reward for the decision.",
        "diff": 3,
        "draft": true
      }
    ],
    "Privacy": [
      {
        "text": "{name} uploads {data} to a public file-sharing link to send them to a colleague.",
        "why": "Personal data is exposed to anyone who has the link.",
        "diff": 1
      },
      {
        "text": "The {dept} team keeps {data} indefinitely, with no reason to hold them.",
        "why": "Keeping personal information with no defined need is a data protection risk.",
        "diff": 2
      },
      {
        "text": "{name} emails {data} to a personal account to work on at home.",
        "why": "Moving personal data outside approved systems puts it at risk.",
        "diff": 1
      },
      {
        "text": "A spreadsheet of {data} is pinned in a company-wide chat channel.",
        "why": "Personal data is shared far beyond the people who need it.",
        "diff": 1
      },
      {
        "text": "{name} looks up a celebrity customer’s account out of curiosity.",
        "why": "Accessing personal records without a business need is a privacy breach.",
        "diff": 2
      },
      {
        "text": "{data} are reused for a marketing campaign customers never agreed to.",
        "why": "Using personal data for an unrelated purpose without consent is a privacy risk.",
        "diff": 3
      },
      {
        "text": "{name} leaves printed {data} on a shared printer overnight.",
        "why": "Unattended printouts expose personal data to anyone passing.",
        "diff": 1
      },
      {
        "text": "{name} shares their login with a temp in {dept} so the temp can “see everything”.",
        "why": "Shared credentials give someone access to data they are not authorised to see.",
        "diff": 2
      },
      {
        "text": "{vendor} is sent a full copy of {data} when it only needed postcodes.",
        "why": "Sharing more personal data than the task needs breaks data minimisation.",
        "diff": 2
      },
      {
        "text": "{name} posts a screenshot of a support ticket, customer name visible, on social media.",
        "why": "Publishing a customer’s details without consent is a privacy breach.",
        "diff": 2
      },
      {
        "text": "An unencrypted USB stick holding {data} goes missing after a conference.",
        "why": "Unprotected personal data on a lost device may be exposed.",
        "diff": 1
      },
      {
        "text": "{name} keeps copies of {data} on a personal laptop after moving out of {dept}.",
        "why": "Access to personal data should end when the role ends.",
        "diff": 2
      },
      {
        "text": "A customer asks what data is held about them, and {name} is told to ignore the request.",
        "why": "People have rights over their data; ignoring requests is a privacy failure.",
        "diff": 3
      },
      {
        "text": "A new app feature quietly records customers’ location in the background.",
        "why": "Collecting personal data without telling people is a privacy risk.",
        "diff": 3
      },
      {
        "text": "{name} reads {data} aloud on a phone call in a crowded café.",
        "why": "Discussing personal data in public lets others overhear it.",
        "diff": 1
      },
      {
        "text": "A shared drive containing {data} is open to every contractor in the company.",
        "why": "Access should match need; broad access exposes personal data.",
        "diff": 2
      },
      {
        "text": "{name} photographs a customer’s ID on a personal phone to “save time”.",
        "why": "Personal devices sit outside the controls that protect sensitive data.",
        "diff": 2
      },
      {
        "text": "Old laptops holding {data} are sold without being wiped.",
        "why": "Disposed devices must be wiped, or the data leaves with them.",
        "diff": 1
      },
      {
        "text": "{name} forwards a colleague’s medical leave note to the whole team to explain a missed deadline.",
        "why": "Health details are sensitive. Share only what is needed, only with people who need it.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "To chase a late payment, {name} posts a customer’s name and debt in a public reply to their review.",
        "why": "Disclosing a customer’s financial details in public is a privacy breach, whatever the reason.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "An analyst joins two datasets to work out which employees gave which “anonymous” survey answers.",
        "why": "Re-identifying people from anonymised data breaks the promise they were given.",
        "diff": 3,
        "draft": true
      }
    ],
    "Conflict": [
      {
        "text": "{name} helps select {vendor}, which is owned by their {kin}, without saying so.",
        "why": "An undisclosed family interest can compromise impartial decisions.",
        "diff": 1
      },
      {
        "text": "A manager in {dept} awards paid work to a business they secretly own.",
        "why": "An undisclosed financial interest compromises impartiality.",
        "diff": 1
      },
      {
        "text": "{name} interviews their {kin} for a role in {dept} and scores them highest.",
        "why": "Assessing a relative creates a conflict that should be declared and managed.",
        "diff": 1
      },
      {
        "text": "{name} holds shares in {vendor} and sits on the panel reviewing its bid.",
        "why": "A financial stake in a bidder must be declared before taking part.",
        "diff": 1
      },
      {
        "text": "{name} runs a side business that competes for the company’s own clients, and says nothing.",
        "why": "Undeclared outside interests can pull loyalty away from the employer.",
        "diff": 2
      },
      {
        "text": "{name} approves the expense claims of their {kin}, who also works in {dept}.",
        "why": "Approving a relative’s claims undermines independent review.",
        "diff": 1
      },
      {
        "text": "{name} is negotiating a job offer from {vendor} while still managing its contract.",
        "why": "Pending employment with a counterparty affects judgement and should be declared.",
        "diff": 2
      },
      {
        "text": "{name} sits on the board of a charity applying for the company’s community grant.",
        "why": "An outside role linked to a decision should be disclosed, and the person should step back.",
        "diff": 3
      },
      {
        "text": "A {dept} lead hires {vendor} without other quotes because it is run by a close {kin}.",
        "why": "Personal relationships that influence supplier choice must be declared.",
        "diff": 2
      },
      {
        "text": "{name} sets the price for a property deal in which their {kin} is the buyer.",
        "why": "Acting on both sides of a deal is a conflict of interest.",
        "diff": 2
      },
      {
        "text": "{name} is asked to audit a process they designed and still run.",
        "why": "Reviewing your own work removes independence; the conflict should be flagged.",
        "diff": 3
      },
      {
        "text": "{name} is dating the account manager at {vendor} and still signs off its invoices.",
        "why": "A close personal relationship with a supplier should be declared and the approval reassigned.",
        "diff": 2
      },
      {
        "text": "{name} invests personally in a startup that {dept} is evaluating as a partner.",
        "why": "A personal investment in a potential partner must be declared.",
        "diff": 3
      },
      {
        "text": "{name} is asked to investigate a complaint against their {kin}.",
        "why": "Investigating someone close to you compromises fairness; the case should be reassigned.",
        "diff": 2
      },
      {
        "text": "{name} sets the team bonus pool, including their own payout, with no second approver.",
        "why": "Deciding your own benefit without oversight is a conflict.",
        "diff": 3
      },
      {
        "text": "{name}’s {kin} is a director at {vendor}, which {name} is about to audit.",
        "why": "A close tie to an audited party must be declared and the audit reassigned.",
        "diff": 2
      },
      {
        "text": "{name} takes a paid weekend job with a client of {dept} without telling anyone.",
        "why": "Undeclared outside work for a client can divide loyalty.",
        "diff": 3
      },
      {
        "text": "{name} chairs the panel choosing a training provider their {kin} co-founded.",
        "why": "A family link to a candidate supplier must be declared before the panel meets.",
        "diff": 2
      },
      {
        "text": "{name} recommends {vendor} for a large order without mentioning that their {kin} earns commission from {vendor}.",
        "why": "The undisclosed personal interest is the issue. Declare it and step back from the decision.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "{name} is asked to assess a job application from someone they co-own a rental flat with.",
        "why": "A shared financial interest must be declared before reviewing the person.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "A grants panel member volunteers every weekend at the charity whose bid they are scoring.",
        "why": "Close personal involvement with an applicant needs declaring, even when it is unpaid.",
        "diff": 3,
        "draft": true
      }
    ],
    "Fraud": [
      {
        "text": "A {dept} employee creates invoices for services that never happened.",
        "why": "Fictitious invoices deliberately misrepresent transactions.",
        "diff": 1
      },
      {
        "text": "{name} records fictional orders to reach a sales bonus.",
        "why": "Invented transactions misrepresent performance.",
        "diff": 1
      },
      {
        "text": "{name} submits taxi receipts for trips taken on holiday.",
        "why": "Claiming personal costs as business expenses is fraud.",
        "diff": 1
      },
      {
        "text": "An email from a look-alike address asks {name} to change {vendor}’s bank details today.",
        "why": "Payment-diversion scams impersonate suppliers; verify through a known contact.",
        "diff": 2
      },
      {
        "text": "{name} backdates a contract so its revenue lands in the earlier quarter.",
        "why": "Altering dates to misstate results is deliberate misrepresentation.",
        "diff": 3
      },
      {
        "text": "A team lead asks {name} to sign timesheets for hours nobody worked.",
        "why": "Paying for hours not worked is fraud.",
        "diff": 2
      },
      {
        "text": "{name} sets up a “vendor” account that pays into their own bank.",
        "why": "A ghost vendor channels company money to an insider.",
        "diff": 1
      },
      {
        "text": "{name} splits a {amount} purchase into small orders to avoid needing approval.",
        "why": "Splitting purchases to dodge approval limits is a common fraud tactic.",
        "diff": 2
      },
      {
        "text": "Stock written off as “damaged” is actually being sold online by {name}.",
        "why": "Misreporting assets in order to take them is fraud.",
        "diff": 2
      },
      {
        "text": "{name} adds a few extra miles to every mileage claim.",
        "why": "Small, repeated false claims are still fraud.",
        "diff": 1
      },
      {
        "text": "A caller claiming to be the CEO tells {name} to wire {amount} urgently and keep it secret.",
        "why": "Urgency plus secrecy is the signature of CEO fraud; verify through a known channel.",
        "diff": 2
      },
      {
        "text": "{name} edits a customer’s income figures so their loan application passes.",
        "why": "Falsifying application data to win approval is fraud.",
        "diff": 3
      },
      {
        "text": "Refunds keep going to the same card, which belongs to {name} in {dept}.",
        "why": "Routing refunds to yourself is fraud.",
        "diff": 2
      },
      {
        "text": "A manager asks {name} to leave a known product defect out of the quarterly report.",
        "why": "Concealing material facts misleads stakeholders, which is fraud.",
        "diff": 3
      },
      {
        "text": "{name} reuses the same hotel receipt across two expense claims.",
        "why": "Duplicate claims are a deliberate false representation.",
        "diff": 1
      },
      {
        "text": "Targets are met by shipping goods nobody ordered, then quietly reversing them next quarter.",
        "why": "Channel stuffing misstates revenue.",
        "diff": 3
      },
      {
        "text": "{name} signs off a {amount} delivery of goods that never arrived.",
        "why": "Approving undelivered goods enables a fraudulent payment.",
        "diff": 2
      },
      {
        "text": "A fake payroll email captures {name}’s password, and their salary is redirected to a new account.",
        "why": "Payroll diversion is fraud; changes to pay details need verification.",
        "diff": 3
      },
      {
        "text": "{name} copies a colleague’s approval signature onto a purchase form “because they would have said yes anyway”.",
        "why": "Forging an approval falsifies a record, whatever the intent.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "{name} asks {vendor} to invoice a team dinner as “training services”.",
        "why": "Disguising what a payment was for falsifies the company’s records.",
        "diff": 3,
        "draft": true
      },
      {
        "text": "A sales rep marks free-trial sign-ups as paying customers to hit a quarterly target.",
        "why": "Misreporting results to earn a target is fraud.",
        "diff": 3,
        "draft": true
      }
    ]
  },
  "incidents": [
    {
      "title": "An exposed customer file",
      "context": "{name} discovers that a customer file is accessible through a public link.",
      "steps": [
        "Notify the incident lead through the urgent reporting channel.",
        "Under the lead’s direction, revoke the public link to contain exposure.",
        "Preserve access logs and a secure record of what happened.",
        "Assess which data and people were affected.",
        "Have the authorised team make required notifications.",
        "Verify the fix and record lessons to prevent recurrence."
      ],
      "diff": 2
    },
    {
      "title": "A suspicious supplier payment",
      "context": "A payment to {vendor} may have gone to a changed bank account.",
      "steps": [
        "Alert the incident lead and finance response team.",
        "Have authorised finance staff pause pending related payments.",
        "Preserve invoices, messages, and transaction records.",
        "Verify the change with {vendor} using a trusted contact.",
        "Have the response team coordinate recovery and required reporting.",
        "Review payment controls and document improvements."
      ],
      "diff": 3
    },
    {
      "title": "A lost work laptop",
      "context": "{name} reports that their company laptop is missing.",
      "steps": [
        "Report the loss to the security incident team.",
        "Have authorised security staff lock the device and revoke sessions.",
        "Preserve device details and the last known activity records.",
        "Assess whether protected information may have been exposed.",
        "Have the authorised response team handle required notifications.",
        "Confirm recovery actions and improve device safeguards."
      ],
      "diff": 1
    },
    {
      "title": "A phishing click",
      "context": "{name} in {dept} clicked a link in a fake login email and entered their password.",
      "steps": [
        "Report the click to the security team straight away.",
        "Have security reset the password and end active sessions.",
        "Preserve the email and its headers as evidence.",
        "Check the account’s activity for unauthorised access.",
        "Have the authorised team notify anyone affected if data was accessed.",
        "Share the lesson and run a phishing refresher."
      ],
      "diff": 1
    },
    {
      "title": "A bribe on the table",
      "context": "A representative of {vendor} offers {name} cash to approve their tender.",
      "steps": [
        "Decline the offer clearly and accept nothing.",
        "Report it to the compliance team promptly.",
        "Write down what was said, when, and by whom.",
        "Step back from the tender decision while it is reviewed.",
        "Let compliance decide on investigation and any reporting.",
        "Review the tender for other red flags and record the outcome."
      ],
      "diff": 1
    },
    {
      "title": "A ransom note on a shared drive",
      "context": "Files on a {dept} shared drive have been encrypted, and a ransom note has appeared.",
      "steps": [
        "Disconnect the affected computer from the network.",
        "Report the incident to the IT security hotline.",
        "Preserve the ransom note and system logs without wiping anything.",
        "Identify which systems and files are affected.",
        "Have leadership and authorised teams handle notifications and decisions.",
        "Restore from clean backups and close the entry point."
      ],
      "diff": 3
    },
    {
      "title": "A misdirected payroll email",
      "context": "{name} emailed a file of payroll records to the wrong external address.",
      "steps": [
        "Report it to the privacy team immediately.",
        "Through the privacy team, ask the recipient to delete the email and confirm.",
        "Keep a copy of the sent email and the recipient’s reply.",
        "Assess whose data was in the file and how sensitive it is.",
        "Have the privacy team make any required notifications.",
        "Add recipient checks for files containing personal data."
      ],
      "diff": 1
    },
    {
      "title": "Duplicated expense claims",
      "context": "An analyst notices that one manager’s expense claims appear to be duplicated.",
      "steps": [
        "Avoid confronting the manager directly.",
        "Report the pattern confidentially to the fraud team.",
        "Preserve the claims and receipts without altering them.",
        "Let investigators review the full claim history.",
        "Have authorised staff decide on disciplinary and reporting steps.",
        "Strengthen expense checks for duplicate receipts."
      ],
      "diff": 3
    },
    {
      "title": "A slip in the warehouse",
      "context": "A colleague slips on a wet floor in the {dept} warehouse.",
      "steps": [
        "Make sure the person is safe and get first aid.",
        "Make the area safe so no one else slips.",
        "Report the incident to the site safety lead.",
        "Record what happened, with photos of the area.",
        "Investigate why the floor was wet.",
        "Fix the cause and share the lessons with the site."
      ],
      "diff": 1
    },
    {
      "title": "Cash deposits just under the limit",
      "context": "A new customer has deposited large sums in cash, just below the reporting threshold, several days in a row.",
      "steps": [
        "Complete the transaction normally without alerting the customer.",
        "Record the transactions and what made them unusual.",
        "Escalate internally to the money laundering reporting officer.",
        "Let the reporting officer review the account and decide on a report.",
        "Follow the reporting officer’s instructions on the account.",
        "Add the pattern to future monitoring training."
      ],
      "diff": 3
    },
    {
      "title": "A sanctions screening alert",
      "context": "Payment screening flags a beneficiary whose name is close to a sanctions list entry.",
      "steps": [
        "Hold the payment as the screening procedure requires.",
        "Escalate the alert to the sanctions compliance team.",
        "Gather the payment details and supporting documents.",
        "Let compliance confirm whether it is a true match.",
        "Have compliance handle any blocking and regulatory reports.",
        "Record the decision and the evidence behind it."
      ],
      "diff": 3
    },
    {
      "title": "Plans leaked online",
      "context": "{name} sees confidential product plans posted on a public forum.",
      "steps": [
        "Avoid sharing or commenting on the post.",
        "Report it to the security team.",
        "Capture screenshots and the link as evidence.",
        "Help identify where the leak may have come from.",
        "Let authorised teams request a takedown and handle any notices.",
        "Review who had access to the plans and tighten it."
      ],
      "diff": 2
    },
    {
      "title": "An unbadged visitor",
      "context": "A visitor without a badge follows staff through a secure door into {dept}.",
      "steps": [
        "Politely ask the person who they are visiting.",
        "Escort them to reception rather than leaving them alone.",
        "Report the incident to building security.",
        "Note the time, the door, and a description.",
        "Let security check footage and whether anything was accessed.",
        "Remind the team not to hold secure doors open."
      ],
      "diff": 1
    },
    {
      "title": "An anonymous concern",
      "context": "{name} receives an anonymous message alleging that a manager is falsifying sales figures.",
      "steps": [
        "Acknowledge the report without trying to identify the sender.",
        "Pass the report to the speak-up channel.",
        "Keep the message secure and share it with no one else.",
        "Let compliance assess the allegation.",
        "Have independent investigators handle any inquiry.",
        "Protect the reporter from retaliation and record the outcome."
      ],
      "diff": 3
    },
    {
      "title": "A gift at the door",
      "context": "{vendor} delivers {gift} to {name}’s home.",
      "steps": [
        "Set the gift aside without using it.",
        "Report it to your manager and the compliance team.",
        "Record the gift in the gift register with its value.",
        "Follow compliance’s decision to return or donate it.",
        "Send {vendor} a polite note about the gift policy.",
        "Note the event in the supplier relationship file."
      ],
      "diff": 1
    },
    {
      "title": "Customer data in a public AI tool",
      "context": "{name} pasted customer complaints, names included, into a public AI chatbot.",
      "steps": [
        "Stop using the tool for the task.",
        "Report it to the privacy team.",
        "Record what was pasted and when.",
        "Assess what personal data was shared.",
        "Have the privacy team decide on deletion requests and notifications.",
        "Update guidance on approved AI tools."
      ],
      "diff": 2
    },
    {
      "title": "An unapproved change",
      "context": "A system change went live without approval, and customer payments are failing.",
      "steps": [
        "Alert the incident manager.",
        "Roll back the change under the incident manager’s direction.",
        "Preserve the change logs and deployment record.",
        "Assess which customers and payments were affected.",
        "Have authorised teams update customers and regulators if needed.",
        "Review change controls and record lessons."
      ],
      "diff": 2
    },
    {
      "title": "A missing courier package",
      "context": "A courier package of signed customer contracts never arrived.",
      "steps": [
        "Confirm with the courier that the package is missing.",
        "Report the loss to the privacy team.",
        "Keep the tracking record and dispatch details.",
        "List which customers’ documents were inside.",
        "Have the privacy team handle notifications.",
        "Switch to secure digital delivery for contracts."
      ],
      "diff": 2
    },
    {
      "title": "Transactions a customer didn’t make",
      "context": "A customer reports card transactions they didn’t make.",
      "steps": [
        "Freeze the card under the fraud procedure.",
        "Log the report with the fraud team.",
        "Preserve transaction and login records.",
        "Investigate how the account was accessed.",
        "Have the fraud team handle refunds and required reports.",
        "Tell the customer the outcome and how to stay safe."
      ],
      "diff": 2
    },
    {
      "title": "A pricing chat at a trade fair",
      "context": "At a trade fair, a competitor suggests to {name} that both firms “keep prices steady” next year.",
      "steps": [
        "Refuse to discuss pricing, and say so clearly.",
        "Leave the conversation.",
        "Write a note of what was said, by whom, and when.",
        "Report it to the legal team promptly.",
        "Let legal decide on any further action.",
        "Refresh the team on competition law at events."
      ],
      "diff": 2
    },
    {
      "title": "An error in a filed report",
      "context": "{name} spots an error in a report already sent to the regulator.",
      "steps": [
        "Tell your manager and the compliance team.",
        "Pause further reports that use the same data.",
        "Preserve the submitted version and the source data.",
        "Work out the size and cause of the error.",
        "Have compliance contact the regulator with a correction.",
        "Fix the data checks that missed it."
      ],
      "diff": 3
    },
    {
      "title": "A stray USB stick",
      "context": "{name} finds an unlabelled USB stick in the car park.",
      "steps": [
        "Don’t plug it into any device.",
        "Hand it to the IT security team.",
        "Note where and when it was found.",
        "Let security examine it safely.",
        "Have security alert staff if it was a planned attack.",
        "Share a reminder about unknown devices."
      ],
      "diff": 1
    },
    {
      "title": "A supplier’s data breach",
      "context": "{vendor} reports that its systems were breached and your customer data may be involved.",
      "steps": [
        "Escalate the notice to the incident lead.",
        "Through the lead, ask {vendor} to contain and confirm the scope.",
        "Keep all communications with {vendor} on record.",
        "Assess which of your customers are affected.",
        "Have the authorised team make required notifications.",
        "Review {vendor}’s security terms and monitoring."
      ],
      "diff": 2
    },
    {
      "title": "An overheard share tip",
      "context": "{name} overhears a colleague planning to buy shares before an unannounced acquisition.",
      "steps": [
        "Don’t trade or pass the information on.",
        "Report the concern to compliance confidentially.",
        "Note what you heard, when, and where.",
        "Let compliance review trading records.",
        "Have compliance handle any reporting to the regulator.",
        "Remind staff about insider lists and blackout periods."
      ],
      "diff": 3
    }
  ]
};
