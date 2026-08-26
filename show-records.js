<!-- =====================================================
     SHOW STANDARD ANIMAL PROFILE — PART 1 OF 3: CSS
     Paste this FIRST on the Animal Profile page.
====================================================== -->
<style>
body {
  font-family: 'Quicksand', Arial, sans-serif !important;
  margin: 0 !important;
  padding: 20px !important;
}

.profile {
  max-width: 950px;
  margin: 40px auto;
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid rgba(70,137,134,.22);
  box-shadow: 0 8px 22px rgba(0,0,0,.06);
}

.name {
  font-family: 'Uchen', serif;
  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: #2f6f6f;
  padding: 16px;
  margin-bottom: 18px;
  background: rgba(70,137,134,.05);
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 12px;
}


.call-name {
  margin-top: -10px;
  margin-bottom: 18px;
  text-align: center;
  font-family: 'Uchen', serif;
  font-size: 20px;
  font-weight: normal;
  color: #2f6f6f;
  opacity: .88;
}

/* ===========================================
   ANIMAL ARTWORK
=========================================== */

.animal-art {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 25px auto;
    text-align: center;
}

.animal-art a {
    display: inline-block;
    max-width: 100%;
}

.animal-art img {
    display: block;

    width: auto;
    height: auto;

    max-width: 900px;
    max-height: 600px;

    margin: 0 auto;

    object-fit: contain;

    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,.12);

    transition: transform .2s ease;
}

.animal-art img:hover {
    transform: scale(1.01);
}

body.ss-dark-mode .animal-art img {
    box-shadow: 0 8px 20px rgba(0,0,0,.45);
}

/* Mobile responsiveness */
@media (max-width: 950px) {
    .animal-art img {
        max-width: 100%;
        max-height: 600px;
    }
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(70,137,134,.18);
  margin-bottom: 18px;
}

.stat-item {
  font-size: 14px;
  line-height: 1.5;
}

.stat-item b {
  display: inline-block;
  padding: 4px 9px;
  background: rgba(70,137,134,.08);
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 999px;
  margin-right: 6px;
  color: #2f6f6f;
  font-family: 'Barlow SC', 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.section-title {
  margin-top: 24px;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(70,137,134,.18);
  font-family: 'Barlow SC', 'Oswald', sans-serif;
  color: #2f6f6f;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: 18px;
}

.box {
  padding: 14px;
  background: rgba(70,137,134,.04);
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 12px;
  margin-bottom: 18px;
}

.bio-box {
  white-space: pre-wrap;
  line-height: 1.6;
}

/* Genetics & Health pretty-up */
.section-title + .box .stat-item {
  padding: 9px 10px;
  margin-bottom: 8px;
  background: #ffffff;
  border: 1px solid rgba(70,137,134,.14);
  border-radius: 10px;
}

.section-title + .box .stat-item:last-child {
  margin-bottom: 0;
}

.breed-issues-wrap {
  margin-top: 12px;
}

.breed-issues-wrap .stat-item {
  background: rgba(70,137,134,.06) !important;
}

.breed-issues-wrap .stat-item > div {
  margin-top: 8px !important;
  padding: 10px !important;
  background: #ffffff !important;
  border: 1px solid rgba(70,137,134,.18) !important;
  border-radius: 10px !important;
  line-height: 1.5 !important;
}

.issue-tag {
  display: inline-block;
  padding: 4px 9px;
  margin: 3px 4px 0 0;
  background: rgba(70,137,134,.08);
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 999px;
  font-size: 13px;
  color: #2f6f6f;
}

.pedigree {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 10px;
  min-height: 60px;
  white-space: normal;
}

.gen-label {
  font-family: 'Barlow SC', 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #2f6f6f;
  opacity: .8;
  text-align: center;
}

.row {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.pedigree-box {
  min-width: 140px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  flex-shrink: 0;
}

.pedigree-box:hover {
  background: rgba(70,137,134,.08);
}

.p-name {
  font-weight: bold;
  color: #2f6f6f;
}

.p-breed {
  font-size: 12px;
  opacity: .7;
}

.empty {
  opacity: .45;
}

#offspringTable {
  width: 100%;
  border-collapse: separate !important;
  border-spacing: 0;
  background: #ffffff;
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 12px;
  overflow: hidden;
}

#offspringTable th,
#offspringTable td,
.records-table th,
.records-table td {
  padding: 11px 12px;
  border-bottom: 1px solid rgba(70,137,134,.14);
  text-align: left;
  font-size: 14px;
}

#offspringTable th,
.records-table th {
  background: #2f6f6f;
  color: #ffffff;
  font-family: 'Barlow SC', 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: .08em;
  font-weight: 600;
  text-transform: uppercase;
}

#offspringTable tr:last-child td,
.records-table tr:last-child td {
  border-bottom: none;
}

#offspringTable tr:hover,
.records-table tr:hover {
  background: rgba(70,137,134,.08);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(160px,1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.summary-card {
  background: #ffffff;
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 12px;
  padding: 14px;
  text-align: center;
}

.summary-card strong {
  display: block;
  font-size: 24px;
  color: #2f6f6f;
}

.show-button {
  padding: 8px 16px;
  border: 1px solid rgba(70,137,134,.35);
  background: #2f6f6f;
  color: #ffffff;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'Quicksand', Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin: 4px 4px 0 0;
  transition: .2s ease;
}

.show-button:hover {
  background: #468986;
  border-color: #468986;
}

.retired-badge {
  display: inline-block;
  padding: 6px 12px;
  margin-top: 8px;
  background: #8b1e1e;
  color: #ffffff;
  border-radius: 999px;
  font-family: 'Barlow SC', 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
}


.retire-button {
  background: #8b1e1e;
  border-color: #8b1e1e;
}

.retire-button:hover {
  background: #a73333;
  border-color: #a73333;
}

.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: rgba(0,0,0,.55);
}

.modal-content {
  background: #ffffff;
  width: 90%;
  max-width: 950px;
  max-height: 80vh;
  overflow-y: auto;
  margin: 5vh auto;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid rgba(70,137,134,.22);
  box-shadow: 0 8px 22px rgba(0,0,0,.12);
}

.close-modal {
  float: right;
  font-weight: bold;
  cursor: pointer;
  color: #2f6f6f;
}


/* DARK MODE SUPPORT */
body.ss-dark-mode {
  background: #171c1c !important;
  color: #e5e5e5 !important;
}

body.ss-dark-mode .profile {
  background: #1f2525;
  border-color: #3b4d4d;
  box-shadow: 0 8px 22px rgba(0,0,0,.22);
  color: #e5e5e5;
}

body.ss-dark-mode .name,
body.ss-dark-mode .registered-name {
  background: #242b2b;
  border-color: #3b4d4d;
  color: #8fc5c2;
}

body.ss-dark-mode .call-name {
  color: #8fc5c2;
}

body.ss-dark-mode .animal-art img {
    box-shadow: 0 8px 20px rgba(0,0,0,.45);
}

body.ss-dark-mode .stats {
  border-bottom-color: #3b4d4d;
}

body.ss-dark-mode .stat-item,
body.ss-dark-mode .box,
body.ss-dark-mode .bio-box,
body.ss-dark-mode .record-details-content {
  color: #e5e5e5;
}

body.ss-dark-mode .stat-item b,
body.ss-dark-mode .section-title,
body.ss-dark-mode .gen-label,
body.ss-dark-mode .p-name,
body.ss-dark-mode .summary-card strong,
body.ss-dark-mode .close-modal {
  color: #8fc5c2;
}

body.ss-dark-mode .stat-item b,
body.ss-dark-mode .issue-tag {
  background: rgba(143,197,194,.10);
  border-color: #3b4d4d;
}

body.ss-dark-mode .section-title {
  border-bottom-color: #3b4d4d;
}

body.ss-dark-mode .box,
body.ss-dark-mode .summary-card,
body.ss-dark-mode .pedigree-box,
body.ss-dark-mode .modal-content {
  background: #242b2b;
  border-color: #3b4d4d;
  color: #e5e5e5;
}

body.ss-dark-mode .section-title + .box .stat-item {
  background: #2a3131;
  border-color: #3b4d4d;
  color: #e5e5e5;
}

body.ss-dark-mode .breed-issues-wrap .stat-item {
  background: #2a3131 !important;
}

body.ss-dark-mode .breed-issues-wrap .stat-item > div,
body.ss-dark-mode .breed-issues-wrap .stat-item div[style] {
  background: #1f2525 !important;
  border-color: #3b4d4d !important;
  color: #e5e5e5 !important;
}

body.ss-dark-mode .pedigree-box:hover,
body.ss-dark-mode #offspringTable tr:hover,
body.ss-dark-mode .records-table tr:hover {
  background: rgba(143,197,194,.10);
}

body.ss-dark-mode .p-breed,
body.ss-dark-mode .empty {
  color: #aebcbc;
  opacity: .85;
}

body.ss-dark-mode #offspringTable,
body.ss-dark-mode .records-table {
  background: #242b2b;
  border-color: #3b4d4d;
  color: #e5e5e5;
}

body.ss-dark-mode #offspringTable td,
body.ss-dark-mode .records-table td {
  color: #e5e5e5;
  border-bottom-color: #3b4d4d;
}

body.ss-dark-mode #offspringTable th,
body.ss-dark-mode .records-table th {
  background: #2f6f6f;
  color: #ffffff;
  border-bottom-color: #3b4d4d;
}

body.ss-dark-mode .modal {
  background: rgba(0,0,0,.72);
}

body.ss-dark-mode .show-button {
  background: #2f6f6f;
  border-color: #468986;
  color: #ffffff;
}

body.ss-dark-mode .show-button:hover {
  background: #468986;
  border-color: #8fc5c2;
}


body.ss-dark-mode .retired-badge,
body.ss-dark-mode .retire-button {
  background: #8f3434;
  border-color: #8f3434;
  color: #ffffff;
}

body.ss-dark-mode .retire-button:hover {
  background: #a34141;
  border-color: #a34141;
}

/* =====================================================
   OWNERSHIP + PUBLIC BREEDING
===================================================== */
.public-breeding-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.public-breeding-card {
  padding: 14px;
  background: #ffffff;
  border: 1px solid rgba(70,137,134,.18);
  border-radius: 10px;
  line-height: 1.55;
}

.public-breeding-card strong {
  display: block;
  margin-bottom: 5px;
  color: #2f6f6f;
  font-family: 'Barlow SC', 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.breeding-available-badge {
  display: inline-block;
  padding: 5px 10px;
  margin: 3px 4px 3px 0;
  border: 1px solid rgba(70,137,134,.24);
  border-radius: 999px;
  background: rgba(70,137,134,.08);
  color: #2f6f6f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.breeding-available-badge {
  background: rgba(47,111,111,.12);
  border-color: rgba(47,111,111,.35);
}

.ownership-permissions {
  margin-top: 12px;
  padding: 12px;
  background: rgba(70,137,134,.05);
  border: 1px solid rgba(70,137,134,.16);
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.6;
}

.public-breeding-notes {
  grid-column: 1 / -1;
  white-space: pre-wrap;
}

.public-breeding-result {
  margin-top: 10px;
  min-height: 18px;
  font-size: 13px;
  font-weight: 700;
}

body.ss-dark-mode .public-breeding-card,
body.ss-dark-mode .ownership-permissions {
  background: #2a3131 !important;
  border-color: #3b4d4d !important;
  color: #e5e5e5 !important;
}

body.ss-dark-mode .public-breeding-card strong {
  color: #8fc5c2 !important;
}

body.ss-dark-mode .breeding-available-badge {
  background: rgba(143,197,194,.10) !important;
  border-color: #3b4d4d !important;
  color: #8fc5c2 !important;
}

@media only screen and (max-width: 680px) {
  .public-breeding-grid {
    grid-template-columns: 1fr;
  }

  .public-breeding-notes {
    grid-column: auto;
  }
}



/* COMPACT BREEDING AVAILABILITY PANEL */
.breeding-profile-section {
  margin-top: 18px;
}

.breeding-profile-section .section-title {
  margin-top: 0;
  margin-bottom: 8px;
  padding-bottom: 6px;
  font-size: 15px;
}

.breeding-profile-section > .box {
  padding: 12px;
  margin-bottom: 18px;
}

.breeding-profile-section .public-breeding-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.breeding-profile-section .public-breeding-card {
  padding: 9px 10px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.4;
}

.breeding-profile-section .public-breeding-card strong {
  margin-bottom: 2px;
  font-size: 10px;
}

.breeding-profile-section .breeding-available-badge {
  padding: 4px 8px;
  font-size: 10px;
}

.breeding-profile-section .ownership-permissions {
  margin-top: 8px;
  padding: 9px 10px;
  font-size: 12px;
}

.breeding-profile-section .show-button {
  padding: 7px 13px;
  font-size: 11px;
  margin-top: 9px;
}

@media only screen and (max-width: 760px) {
  .breeding-profile-section .public-breeding-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 500px) {
  .breeding-profile-section .public-breeding-grid {
    grid-template-columns: 1fr;
  }
}

</style>


<!-- =====================================================
     SHOW STANDARD ANIMAL PROFILE — PART 2 OF 3: HTML
     Paste this SECOND, immediately after Part 1.
====================================================== -->
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>

<div class="profile" id="profileBox">
  <p>Loading animal...</p>
</div>

<div id="showModal" class="modal">
  <div class="modal-content">
    <span class="close-modal" onclick="closeShowPopup()">✖</span>
    <h2>Show Records</h2>
    <div id="showModalContent">Loading...</div>
  </div>
</div>

<!-- =====================================================
     SHOW STANDARD ANIMAL PROFILE — PART 3 OF 3: JAVASCRIPT
     Paste this LAST, immediately after Part 2.
====================================================== -->
<script>
console.log("Show Standard Animal Profile — Show Records Title Sync v7 loaded");

const supabaseUrl = "https://vyuklkrqusfvrcaqxmfm.supabase.co";
const supabaseKey = "sb_publishable_2LSbJafkRatck5Ei8HXL-g_0tezT6qu";

window.supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const breedingSupabaseUrl = "https://wcutdyrqxqoknpgswapf.supabase.co";
const breedingSupabaseKey = "sb_publishable_1a1FnNY9kDI9DThnP0D-6w_Zj-zs0rU";

window.breedingClient = window.breedingClient || window.supabase.createClient(
  breedingSupabaseUrl,
  breedingSupabaseKey
);

const Resolver = {
  profilePid: 27,
  animalCache: new Map(),

  getUrlValue() {
    const params = new URLSearchParams(window.location.search);
    return params.get("animal_number") || params.get("id");
  },

  isUUID(value) {
    return /^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(String(value || ""));
  },

  isNumber(value) {
    return value !== null && value !== "" && /^\d+$/.test(String(value));
  },

  async animal(ref) {
    if (!ref) return null;

    const key = String(ref);
    if (this.animalCache.has(key)) return this.animalCache.get(key);

    const promise = (async () => {
      const supabase = getSupabase();
      let query = supabase.from("animals").select("*");

      if (this.isNumber(ref)) {
        query = query.eq("animal_number", Number(ref));
      } else if (this.isUUID(ref)) {
        query = query.eq("id", String(ref));
      } else {
        return null;
      }

      const { data, error } = await query.maybeSingle();
      if (error) {
        console.error("Animal lookup error:", error);
        return null;
      }

      if (data) {
        this.animalCache.set(String(data.id), Promise.resolve(data));
        this.animalCache.set(String(data.animal_number), Promise.resolve(data));
      }

      return data || null;
    })();

    this.animalCache.set(key, promise);
    return promise;
  },

  profileUrl(animal) {
    return "index.php?act=Pages&pid=" +
      this.profilePid +
      "&id=" +
      encodeURIComponent(animal.id || animal.animal_number);
  }
};

function getSupabase() {
  return window.supabaseClient;
}

function getBreedingSupabase() {
  return window.breedingClient;
}

function findCurrentMemberName() {
  const loggedText = document.body ? document.body.innerText || "" : "";
  const loggedMatch = loggedText.match(/LOGGED IN AS:\s*([^\n\(]+)/i);

  if (loggedMatch && loggedMatch[1]) {
    return loggedMatch[1].trim();
  }

  const links = Array.from(document.querySelectorAll('a[href*="showuser="], a[href*="showuser"]'));
  const bad = new Set([
    "profile",
    "members",
    "admin",
    "settings",
    "inbox",
    "alerts",
    "mod cp",
    "my controls",
    "my friends"
  ]);

  const good = links.find(a => {
    const text = String(a.textContent || "").trim();
    return text && !bad.has(text.toLowerCase()) && !text.includes("[") && !text.includes("]");
  });

  return good ? good.textContent.trim() : "";
}

function normalizeOwnerName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function currentUserOwnsAnimal(animal) {
  const current = normalizeOwnerName(findCurrentMemberName());
  const owner = normalizeOwnerName(animal?.owner);

  return !!current && !!owner && current === owner;
}

function splitCoOwnerNames(value) {
  return String(value || "")
    .split(/\s*(?:,|;|\/|\||&|\band\b)\s*/i)
    .map(name => name.trim())
    .filter(Boolean);
}

function currentUserCoOwnsAnimal(animal) {
  const current = normalizeOwnerName(findCurrentMemberName());
  if (!current) return false;

  return splitCoOwnerNames(animal?.co_owner)
    .some(name => normalizeOwnerName(name) === current);
}

function currentUserHasOwnershipAccess(animal) {
  return currentUserOwnsAnimal(animal) || currentUserCoOwnsAnimal(animal);
}

function ownershipRelationshipLabel(animal) {
  if (currentUserOwnsAnimal(animal)) return "Primary Owner";
  if (currentUserCoOwnsAnimal(animal)) return "Co-Owner";
  return "";
}

function calculateAgeYear(birthyear) {
  if (!birthyear) return "Unknown";
  return new Date().getFullYear() - Number(birthyear);
}

function retirementAgeForSpecies(species) {
  const clean = String(species || "").toLowerCase().trim();

  if (clean === "horse" || clean.includes("horse")) return 25;
  if (clean === "dog" || clean.includes("dog")) return 15;
  if (clean === "cat" || clean.includes("cat")) return 15;

  return null;
}

function isAnimalRetired(animal) {
  return String(animal?.owner || "").trim().toLowerCase() === "retired";
}

function animalHasReachedRetirementAge(animal) {
  const ageLimit = retirementAgeForSpecies(animal?.species);
  const age = Number(calculateAgeYear(animal?.birthyear));

  return !!ageLimit && !isNaN(age) && age >= ageLimit;
}

function retirementStatusHTML(animal) {
  return "";
}

function escapeProfileText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function autoRetireAnimalIfNeeded(animal) {
  if (!animal || !animal.id) return animal;
  if (isAnimalRetired(animal)) return animal;
  if (!animalHasReachedRetirementAge(animal)) return animal;

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("animals")
    .update({ owner: "Retired" })
    .eq("id", animal.id)
    .select("*")
    .maybeSingle();

  if (error) {
    console.error("Auto retirement error:", error);
    return animal;
  }

  return data || {
    ...animal,
    owner: "Retired"
  };
}

async function getAnimalConnectionCounts(animal) {
  const supabase = getSupabase();
  const breedingClient = getBreedingSupabase();
  const animalId = animal?.id;
  const animalNumber = animal?.animal_number;

  const offspringSeen = new Set();
  const pedigreeSeen = new Set();
  const showSeen = new Set();
  const semenSeen = new Set();
  const embryoSeen = new Set();
  const pendingSeen = new Set();

  async function collectRows(set, query, keyField = "id") {
    const { data, error } = await query;

    if (error) {
      console.warn("Connection check warning:", error);
      return;
    }

    (data || []).forEach(row => {
      set.add(String(row[keyField] || row.id || JSON.stringify(row)));
    });
  }

  if (animalNumber) {
    await collectRows(
      offspringSeen,
      supabase.from("animals").select("id").or(`sire.eq.${Number(animalNumber)},dam.eq.${Number(animalNumber)}`)
    );

    await collectRows(
      showSeen,
      supabase.from("show_records").select("id").eq("animal_number", Number(animalNumber))
    );
  }

  if (animalId) {
    await collectRows(
      offspringSeen,
      supabase.from("animals").select("id").or(`sire.eq.${animalId},dam.eq.${animalId}`)
    );

    await collectRows(
      showSeen,
      supabase.from("show_records").select("id").eq("animal_id", animalId)
    );

    if (breedingClient) {
      await collectRows(
        semenSeen,
        breedingClient.from("stored_semen").select("id").eq("male_id", animalId)
      );

      await collectRows(
        embryoSeen,
        breedingClient.from("stored_embryos").select("id").or(`sire_id.eq.${animalId},dam_id.eq.${animalId}`)
      );

      await collectRows(
        pendingSeen,
        breedingClient.from("pending_babies").select("id").or(`sire_code.eq.${animalId},dam_code.eq.${animalId}`)
      );
    }

    const { data: pedigreeRows, error: pedigreeError } = await supabase
      .from("animals")
      .select("id, imported_pedigree");

    if (!pedigreeError) {
      (pedigreeRows || []).forEach(row => {
        if (row.id === animalId) return;

        const text = JSON.stringify(row.imported_pedigree || "");
        if (
          text.includes(String(animal.name || "")) ||
          text.includes(String(animalId)) ||
          (animalNumber && text.includes(String(animalNumber)))
        ) {
          pedigreeSeen.add(String(row.id));
        }
      });
    }
  }

  return {
    offspring: offspringSeen.size,
    pedigree: pedigreeSeen.size,
    showRecords: showSeen.size,
    aiStraws: semenSeen.size,
    embryos: embryoSeen.size,
    pendingBabies: pendingSeen.size,
    hasConnections:
      offspringSeen.size > 0 ||
      pedigreeSeen.size > 0 ||
      showSeen.size > 0 ||
      semenSeen.size > 0 ||
      embryoSeen.size > 0 ||
      pendingSeen.size > 0
  };
}

window.retireCurrentAnimal = async function(animalId) {
  try {
    const supabase = getSupabase();

    const { data: animal, error } = await supabase
      .from("animals")
      .select("*")
      .eq("id", animalId)
      .maybeSingle();

    if (error) throw error;
    if (!animal) throw new Error("Animal not found.");

    if (!currentUserOwnsAnimal(animal)) {
      alert("Only the listed owner can retire this animal.");
      return;
    }

    if (isAnimalRetired(animal)) {
      alert("This animal is already retired.");
      return;
    }

    const counts = await getAnimalConnectionCounts(animal);

    if (!counts.hasConnections) {
      const firstConfirm = confirm(
        "This animal has no offspring, no pedigree connections, no show records, no stored AI/embryos, and no pending babies.\n\n" +
        "Retiring it will DELETE it from the registry instead of marking it Retired.\n\n" +
        "Continue?"
      );

      if (!firstConfirm) return;

      const typedName = prompt(
        "To confirm deletion, type the animal's registered name exactly:\n\n" +
        (animal.name || "")
      );

      if (typedName !== (animal.name || "")) {
        alert("Retirement cancelled. The name did not match.");
        return;
      }

      const { error: deleteError } = await supabase
        .from("animals")
        .delete()
        .eq("id", animal.id);

      if (deleteError) throw deleteError;

      alert((animal.name || "Animal") + " was retired and removed from the registry because it had no connections, show records, AI straws, embryos, or pending babies.");
      window.location.href = "index.php?act=Pages&pid=26";
      return;
    }

    const confirmRetire = confirm(
      "Retire this animal?\n\n" +
      "Name: " + (animal.name || "Unnamed") + "\n" +
      "Owner will change from: " + (animal.owner || "-") + "\n" +
      "Owner will change to: Retired\n\n" +
      "This blocks future live breeding. Stored AI straws and embryos remain usable. Show records and pending babies remain preserved.\n\n" +
      "Connections found:\n" +
      "- Offspring: " + counts.offspring + "\n" +
      "- Pedigree references: " + counts.pedigree + "\n" +
      "- Show records: " + counts.showRecords + "\n" +
      "- Stored AI/Semen records: " + counts.aiStraws + "\n" +
      "- Stored embryos: " + counts.embryos + "\n" +
      "- Pending babies: " + counts.pendingBabies
    );

    if (!confirmRetire) return;

    const typedRetire = prompt(
      "Final check: type RETIRE to confirm retiring this animal."
    );

    if (typedRetire !== "RETIRE") {
      alert("Retirement cancelled.");
      return;
    }

    const { error: updateError } = await supabase
      .from("animals")
      .update({ owner: "Retired" })
      .eq("id", animal.id);

    if (updateError) throw updateError;

    alert((animal.name || "Animal") + " has been retired.");
    loadAnimal();

  } catch (error) {
    console.error("Retirement error:", error);
    alert("Retirement error: " + (error.message || error));
  }
};

function openProfileByNumber(num) {
  window.location.href =
    "index.php?act=Pages&pid=27&id=" + encodeURIComponent(num);
}

function normalizeProfileKey(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/_/g, " ")
    .replace(/[‐-‒–—―]/g, "-")
    .replace(/\./g, "")
    .replace(/\s*-\s*group\s*\d+/gi, "")
    .replace(/\s*-\s*division\s*\d+/gi, "")
    .replace(/\s*-\s*team\s*\d+/gi, "")
    .replace(/\s+group\s*\d+$/gi, "")
    .replace(/\s+division\s*\d+$/gi, "")
    .replace(/\s+team\s*\d+$/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function profilePointsValue(record) {
  return Number(record?.calculated_points ?? record?.points ?? 0) || 0;
}

function profileRuleIsRepeatable(rule) {
  return (
    rule?.repeatable === true ||
    rule?.repeatable === "true" ||
    rule?.repeatable === 1 ||
    rule?.repeatable === "1"
  );
}

function profileHighestTitle(points, rules) {
  return (rules || [])
    .filter(rule => Number(rule?.points_required || 0) <= Number(points || 0))
    .sort((a, b) => {
      const thresholdDifference =
        Number(b?.points_required || 0) - Number(a?.points_required || 0);

      if (thresholdDifference) return thresholdDifference;

      return Number(profileRuleIsRepeatable(b)) - Number(profileRuleIsRepeatable(a));
    })[0] || null;
}

function displayProfileActivityTitle(title, points) {
  if (!title) return "";
  if (!profileRuleIsRepeatable(title)) return title.title_code;

  const baseThreshold = Number(title.points_required || 0);
  const repeatIncrement = Number(
    title.repeat_increment || title.points_required || 1
  );
  const totalPoints = Number(points || 0);

  if (
    !Number.isFinite(baseThreshold) ||
    !Number.isFinite(repeatIncrement) ||
    baseThreshold <= 0 ||
    repeatIncrement <= 0 ||
    totalPoints < baseThreshold
  ) {
    return title.title_code;
  }

  const tier = 1 + Math.floor(
    (totalPoints - baseThreshold) / repeatIncrement
  );

  return tier > 1
    ? title.title_code + String(tier)
    : title.title_code;
}

function normalizeManualProfileTitleCode(code) {
  return String(code || "")
    .toUpperCase()
    .replace(/\./g, "")
    .trim();
}

function cleanManualProfileTitleString(value) {
  const originalCodes = String(value || "")
    .split(/\s+/)
    .map(code => code.trim())
    .filter(Boolean);

  const codeMap = {};
  originalCodes.forEach(code => {
    codeMap[normalizeManualProfileTitleCode(code)] = code;
  });

  const cgcHierarchy = ["CGC", "CGCB", "CGCS", "CGCG", "CGCA", "CGCU"];
  const earnedCGC = cgcHierarchy.filter(code => codeMap[code]);
  const highestCGC = earnedCGC.length ? earnedCGC[earnedCGC.length - 1] : null;

  const cleaned = [];

  originalCodes.forEach(code => {
    const key = normalizeManualProfileTitleCode(code);

    if (cgcHierarchy.includes(key)) {
      if (key === highestCGC) {
        cleaned.push(codeMap[key] || code);
      }
      return;
    }

    cleaned.push(code);
  });

  return [...new Set(cleaned)].join(" ");
}


function profileTitleCodeKey(code) {
  return String(code || "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "")
    .trim();
}

const PROFILE_VERSATILITY_TITLES = {
  dog: [
    { name: "Versatility Novice", code: "VND", level: "A" },
    { name: "Versatility Advanced", code: "VAD", level: "B" },
    { name: "Versatility Excellence", code: "VED", level: "C" },
    { name: "Versatility Bronze", code: "VBD", level: "D" },
    { name: "Versatility Silver", code: "VSD", level: "E" },
    { name: "Versatility Gold", code: "VGD", level: "F" }
  ],
  cat: [
    { name: "Versatility Novice", code: "VNC", level: "A" },
    { name: "Versatility Advanced", code: "VAC", level: "B" },
    { name: "Versatility Excellence", code: "VEC", level: "C" },
    { name: "Versatility Bronze", code: "VBC", level: "D" },
    { name: "Versatility Silver", code: "VSC", level: "E" },
    { name: "Versatility Gold", code: "VGC", level: "F" }
  ],
  horse: [
    { name: "Versatility Novice", code: "VNH", level: "A" },
    { name: "Versatility Advanced", code: "VAH", level: "B" },
    { name: "Versatility Excellence", code: "VEH", level: "C" },
    { name: "Versatility Bronze", code: "VBH", level: "D" },
    { name: "Versatility Silver", code: "VSH", level: "E" },
    { name: "Versatility Gold", code: "VGH", level: "F" }
  ]
};

function makeProfileVersatilityMap(categories) {
  const map = {};
  categories.forEach((levels, categoryIndex) => {
    levels.forEach((codes, levelIndex) => {
      codes.forEach(code => {
        map[profileTitleCodeKey(code)] = { category: categoryIndex + 1, level: levelIndex + 1 };
      });
    });
  });
  return map;
}

const PROFILE_VERSATILITY_CODES = {
  dog: makeProfileVersatilityMap([
    [
      ["BN","GN","MFN","MFI","HtMN","HtMI","RN","RI"],
      ["GO","CD","MFO","MFA","HtMO","HtMA","RA","RE"],
      ["CDX","UD","MFE","HtME","RM","RAE"],
      ["UDX","OM","OGM","MFCH","HtMCH","RNC"],
      ["OTCH","NOC","MFGCH","HtMGCH","RACh"]
    ],
    [
      ["Ch","GCh","NatCh","NTD","CGC","CGCB","TAD","TTD"],
      ["IntCh","WCh","ITD","CGCS"],
      ["SprWCh","UniCh","ATD","CGCG"],
      ["HOF","ETD","CGCA"],
      ["HOL","TDCh","CGCU"]
    ],
    [
      ["JH","JHA","CAD","CDN","SHR","RATN","RATO","CJN","CNC","JE","CF","CFN"],
      ["MH","CDI","CDA","HR","RATS","CGN","SE","CFI","CFA"],
      ["MHA","CDE","HRCh","RATM","CSGN","ME","CFE","CFM"],
      ["SH","CDM","GrHCh","RATCh","WNC","EE","CFCh"],
      ["SHA","CDCh","SupHRCh","RATChX","CWGN","EDCh","CFGCh"]
    ],
    [
      ["ObH","PH1","BTr","BH","SD","NDD","ANDD","HT","PT","WD","BkD","CXD","RD","SkD"],
      ["SpH","RS1","SchHI","SDX","DrD","MDD","HS","HI","WRD","BkCh","CXCh","RDX","SkCh"],
      ["RH","RS2","SchHII","SDCh","NBDD","ANBDD","HA","WRDX","BkGrCh","CXGrCh","RDCh","SkGrCh"],
      ["PH2","RS3","SchHIII","SDGrCh","BDD","MBDD","HX","WRDCh","BkSupCh","CXSupCh","RDXCh","SkSupCh"],
      ["Met Lof","RSCh","SchHCh","SDSupCh","GMDD","TDD","HCh","WRDGCh","BkSupGCh","CXSupGCh","RDXGCh","SkSupGCh"]
    ],
    [
      ["JC","JR","JRM","AD","ADX","FD","FDX","CAT","TRJ"],
      ["SC","SR","ADX Bronze","ADX Silver","FDCH Bronze","FDCH Silver","BCAT","TRM"],
      ["MC","SRM","ADX Gold","AgCh","FDCH Gold","FM","DCAT","TRCh"],
      ["LCX","RCh","NAgCh","MAgCh","FMX","FMCh","FCAT","TRChE"],
      ["NFC","SRCh","AgGCH","FDGCh","SCAT","TRGCh"]
    ],
    [
      ["UWP","UWPCh","CTB-B","CTBT-B","DD","DDX","DN","ARJ","HyDN"],
      ["UWPChX","UGWPCh","CTB-I","CTBT-I","DDCh","DJ","ARS","HyDJ"],
      ["UGWPC1","UWPV","CTB-E","CTBT-E","DDACh","DS","ARM","HyDS"],
      ["UWPO","CTB-Ch","CTBT-Ch","DDMCh","DM","ARA","HyDM"],
      ["UWPS","CTB-GCh","CTBT-GCh","DDECh","DE","ARX","HyDE"]
    ],
    [
      ["SWD","SWN","SAR-W","SD-I","SD-II","TD"],
      ["SWNE","SWNA","SAR-U1","SD-III","TDX"],
      ["SWNAE","SWE","SAR-U2","SD-Ch","TDU"],
      ["SWNEE","SWM","SAR-U3","SD-MCh","VST"],
      ["SWME","SAR-Ch","SD-GCh","CT"]
    ]
  ]),

  cat: makeProfileVersatilityMap([
    [
      ["Ch","GCh","NatCh","TAC","TT","TTC","NTD"],
      ["IntCh","WCh","ITD"],
      ["SprWCh","UniCh","ATD"],
      ["HOF","ETD"],
      ["HOL","TDCh"]
    ],
    [
      ["CAB","FON","FRN"],
      ["CAAI","FOI","FRI"],
      ["CAAII","FOA","FRA"],
      ["CACh","FOE","FRE"],
      ["CAGCh","FOCh","FRCh"]
    ],
    [
      ["FFN","RCN","SDN"],
      ["FFI","RCI","SDI"],
      ["FFA","RCA","SDA"],
      ["FFE","RCE","SDE"],
      ["FFCh","RCCh","SDCh"]
    ],
    [
      ["SC1","VN","TB-B","TBB","HJN"],
      ["SC2","VJ","TB-I","TBI","HJI"],
      ["SC3","VS","TB-E","TBE","HJA"],
      ["SC4","VM","TB-Ch","TBCh","HJE"],
      ["SCCh","VE","HJCh"]
    ]
  ]),

  horse: makeProfileVersatilityMap([
    [
      ["Ch","GCh","NatCh","NTD","TTH","TAH","LTI","SMSR"],
      ["IntCh","WCh","ITD","LTT","SMS1"],
      ["SprWCh","UniCh","ATD","LT1L","SMS2"],
      ["HOF","ETD","LT2L","SMS3"],
      ["HOL","TDCh","LT3L","LTM","SMS4","SMSP"]
    ],
    [
      ["DIntro","DTr","CDI","CDT","CBDI","CBDT","WDI","WDT","IHDI","IHDT","CIHDI","CIHDT"],
      ["D1","D2","CD1L","CBD1L","WD1K","IHD1L","CIHD1L"],
      ["D3","D4","C2L","CBD2L","WD2L","IHD2L","CIHD2L"],
      ["DPST","DInt1","CD3L","CBD3L","WD3L","IHD3L","CIHD3L"],
      ["DInt2","DGP","CDM","CBDM","WDM","IHDM","CIHDM"]
    ],
    [
      ["DrPN","NHH","WRPR"],
      ["DrN","IHH","WRP1"],
      ["DrInt","AHH","WTP2"],
      ["DrO","HHCh","WTP3"],
      ["DrA","HHGCh","WTP4"]
    ],
    [
      ["NGH","GDI","GDT"],
      ["IGH","GD1L"],
      ["AGH","GD2L"],
      ["GHCh","GD3L"],
      ["GHGCh","GDM"]
    ],
    [
      ["EnN","RaM","RaA","SRaM","SRaA","HRaM","HRaA","BRR","GYR"],
      ["EnJ","RaL","SRaL","HRaL","BR4","GY1"],
      ["EnI","G3","SG3","HG3","BR3","GY2"],
      ["EnO","G2","SG2","HG2","BR2","GY3"],
      ["G1","SG1","HG1","BR1","GYP"]
    ],
    [
      ["S1","S2","HBG","EPI","EI","EPT"],
      ["S3","S4","HPG","ET","EO"],
      ["S5","S6","H1","E*"],
      ["S7","S8","H2","E**"],
      ["S9","SGP","HR","E***"]
    ],
    [
      ["WPR","WER","TRR","RGr"],
      ["WP1","WE1","TR1","RR"],
      ["WP2","WE2","TR2","RN"],
      ["WP3","WE3","TR3","RNP"],
      ["WPP","WEP","TRP","RP"]
    ],
    [
      ["CR","ROR","WCR"],
      ["C1","RO1","WC1"],
      ["C2","RO2","WC2"],
      ["C3","RO3","WC3"],
      ["CP","ROP","WCP"]
    ]
  ])
};

function getProfileBestVersatilityByCategory(animal, earnedCodes) {
  const species = normalizeProfileKey(animal?.species);
  const map = PROFILE_VERSATILITY_CODES[species];
  const bestByCategory = {};

  if (!map) return bestByCategory;

  (earnedCodes || []).forEach(code => {
    const key = profileTitleCodeKey(code);
    const info = map[key];
    if (!info) return;

    const current = bestByCategory[info.category] || 0;
    bestByCategory[info.category] = Math.max(current, info.level);
  });

  return bestByCategory;
}

function countProfileVersatilityCategoriesAtLeast(bestByCategory, level) {
  return Object.values(bestByCategory)
    .filter(value => Number(value || 0) >= level)
    .length;
}

function calculateProfileVersatilityTitle(animal, earnedCodes) {
  const species = normalizeProfileKey(animal?.species);
  const titles = PROFILE_VERSATILITY_TITLES[species];
  if (!titles) return null;

  const bestByCategory = getProfileBestVersatilityByCategory(animal, earnedCodes);

  const levelA = countProfileVersatilityCategoriesAtLeast(bestByCategory, 1);
  const levelB = countProfileVersatilityCategoriesAtLeast(bestByCategory, 2);
  const levelC = countProfileVersatilityCategoriesAtLeast(bestByCategory, 3);
  const levelD = countProfileVersatilityCategoriesAtLeast(bestByCategory, 4);
  const levelE = countProfileVersatilityCategoriesAtLeast(bestByCategory, 5);

  let earned = null;

  if (levelA >= 3) earned = titles[0];
  if (levelB >= 3) earned = titles[1];
  if (levelC >= 2 && levelB >= 3) earned = titles[2];
  if (levelD >= 1 && levelC >= 2 && levelB >= 3) earned = titles[3];
  if (levelE >= 1 && levelD >= 2 && levelC >= 3) earned = titles[4];
  if (levelE >= 2 && levelD >= 3 && levelC >= 4) earned = titles[5];

  if (!earned) return null;

  return earned.code;
}


function isProfileBestInShow(record) {
  const p = normalizeProfileKey(record?.placement);
  const scope = normalizeProfileKey(record?.show_scope);
  const showName = normalizeProfileKey(record?.show_name);

  return (
    !p.includes("reserve") &&
    (
      p === "bis" ||
      p.includes("best in show") ||
      scope === "all breed" ||
      showName.includes("all breed")
    ) &&
    !p.includes("specialty") &&
    scope !== "specialty" &&
    !showName.includes("specialty")
  );
}

function isProfileSpecialtyBestInShow(record) {
  const p = normalizeProfileKey(record?.placement);
  const scope = normalizeProfileKey(record?.show_scope);
  const showName = normalizeProfileKey(record?.show_name);

  return (
    !p.includes("reserve") &&
    (
      p === "biss" ||
      p.includes("biss") ||
      p.includes("specialty") ||
      scope === "specialty" ||
      showName.includes("specialty")
    ) &&
    (
      p.includes("best in show") ||
      p.includes("best in specialty show") ||
      p.includes("best specialty show") ||
      p === "biss"
    )
  );
}

const showRecordsCache = new Map();

async function getShowRecords(animalNumber, animalId = null) {
  const cacheKey = `${animalNumber || ""}|${animalId || ""}`;
  if (showRecordsCache.has(cacheKey)) return showRecordsCache.get(cacheKey);

  const promise = (async () => {
    const supabase = getSupabase();
    const columns = "*";

    const queries = [];

    if (animalNumber !== null && animalNumber !== undefined && animalNumber !== "") {
      queries.push(
        supabase
          .from("show_records")
          .select(columns)
          .eq("animal_number", Number(animalNumber))
          .order("event_date", { ascending: false })
      );
    }

    if (animalId) {
      queries.push(
        supabase
          .from("show_records")
          .select(columns)
          .eq("animal_id", animalId)
          .order("event_date", { ascending: false })
      );
    }

    const results = await Promise.all(queries);
    const seen = new Set();
    const rows = [];

    results.forEach(({ data, error }) => {
      if (error) {
        console.error("Show records error:", error);
        return;
      }

      (data || []).forEach(row => {
        const key = String(row.id || `${row.animal_id}|${row.event_date}|${row.show_name}|${row.class}|${row.placement}`);
        if (!seen.has(key)) {
          seen.add(key);
          rows.push(row);
        }
      });
    });

    /*
      Circuit Champion titles are database-wide season results and are exposed by
      a view rather than ordinary show_records. Add synthetic title records just
      like the Show Records popup does.
    */
    if (animalId) {
      const { data: championRows, error: championError } = await supabase
        .from("endurance_circuit_champions")
        .select("*")
        .eq("animal_id", animalId);

      if (!championError) {
        (championRows || []).forEach(row => {
          rows.push({
            id: `endurance-champion-${row.endurance_circuit}-${row.season}`,
            animal_id: animalId,
            event_date: `${row.season}-12-31`,
            show_name: `${row.endurance_circuit} ${row.season} Season`,
            show_type: "activity",
            show_scope: "association",
            association_key: "endurance_club",
            association_event_type: "circuit_champion",
            activity_key: null,
            class: "Endurance Club Circuit Champion",
            placement: "Circuit Champion",
            points: Number(row.circuit_points || 0),
            calculated_points: Number(row.circuit_points || 0),
            endurance_circuit: row.endurance_circuit,
            endurance_season: Number(row.season),
            endurance_completed: false,
            endurance_winnings: 0
          });
        });
      } else {
        console.warn("Endurance circuit champion lookup warning:", championError.message);
      }
    }

    rows.sort((a, b) => String(b.event_date || "").localeCompare(String(a.event_date || "")));
    return rows;
  })().catch(error => {
    showRecordsCache.delete(cacheKey);
    throw error;
  });

  showRecordsCache.set(cacheKey, promise);
  return promise;
}

let profileTitleRuleDataPromise = null;
const liveRegisteredNameCache = new Map();

async function getProfileTitleRuleData() {
  if (!profileTitleRuleDataPromise) {
    const supabase = getSupabase();

    profileTitleRuleDataPromise = Promise.all([
      supabase.from("title_rules").select("*").eq("active", true),
      supabase.from("activity_title_rules").select("*").eq("active", true),
      supabase.from("activity_types").select("*").eq("active", true),
      supabase.from("total_award_activity_rules").select("*").eq("active", true),
      supabase.from("herding_title_rules").select("*").eq("active", true)
    ]).then(([
      titleRulesResult,
      activityRulesResult,
      activityTypesResult,
      totalAwardRulesResult,
      herdingRulesResult
    ]) => ({
      titleRules: titleRulesResult.data || [],
      activityRules: activityRulesResult.data || [],
      activityTypes: activityTypesResult.data || [],
      totalRules: totalAwardRulesResult.data || [],
      herdingRules: herdingRulesResult.data || []
    })).catch(error => {
      profileTitleRuleDataPromise = null;
      throw error;
    });
  }

  return profileTitleRuleDataPromise;
}



function profileHighestTestingTitles(codes) {
  const all = profileUniqueTitleList(codes);
  const cgcOrder = ["CGC", "CGCB", "CGCS", "CGCG", "CGCA", "CGCU"];
  let bestCgc = null;
  const others = [];

  all.forEach(code => {
    const key = normalizeManualProfileTitleCode(code);
    const rank = cgcOrder.indexOf(key);

    if (rank >= 0) {
      if (!bestCgc || rank > cgcOrder.indexOf(normalizeManualProfileTitleCode(bestCgc))) {
        bestCgc = code;
      }
    } else {
      others.push(code);
    }
  });

  return [...(bestCgc ? [bestCgc] : []), ...others];
}

function profileUniqueTitleList(values) {
  const seen = new Set();
  return (values || [])
    .map(value => String(value || "").trim())
    .filter(Boolean)
    .filter(value => {
      const key = normalizeManualProfileTitleCode(value);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

/* ============================================================
   SPECIAL / ASSOCIATION TITLE ENGINES
   Audited against the current Show Records title engine.
   ============================================================ */
const SS_ENDURANCE_TITLE_RACES = [{"key":"northern_circuit_polar_trek","name":"Polar Trek","circuit":"Northern Circuit","series":null,"grade":"III","conference":"Host Dependent","distance_km":850,"event_kind":"rated","requires_endurance_title":true},{"key":"northern_circuit_highland_challenge","name":"Highland Challenge","circuit":"Northern Circuit","series":null,"grade":"III","conference":"Western","distance_km":155,"event_kind":"rated","requires_endurance_title":true},{"key":"northern_circuit_viking_cup","name":"Viking Cup","circuit":"Northern Circuit","series":null,"grade":"III","conference":"Western","distance_km":165,"event_kind":"rated","requires_endurance_title":true},{"key":"northern_circuit_fjord_expedition","name":"Fjord Expedition","circuit":"Northern Circuit","series":null,"grade":"III","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"northern_circuit_siberian_plate","name":"Siberian Plate","circuit":"Northern Circuit","series":null,"grade":"I","conference":"Eastern","distance_km":1500,"event_kind":"rated","requires_endurance_title":true},{"key":"northern_circuit_baltic_challenge","name":"Baltic Challenge","circuit":"Northern Circuit","series":null,"grade":"III","conference":"Western","distance_km":350,"event_kind":"rated","requires_endurance_title":true},{"key":"northern_circuit_celtic_crossing","name":"Celtic Crossing","circuit":"Northern Circuit","series":null,"grade":"III","conference":"Western","distance_km":400,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_saudi_cup","name":"Saudi Cup","circuit":"Desert Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":550,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_marathon_des_sables","name":"Marathon des Sables","circuit":"Desert Circuit","series":null,"grade":"III","conference":"Western","distance_km":260,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_atlas_challenge","name":"Atlas Challenge","circuit":"Desert Circuit","series":null,"grade":"II","conference":"Western","distance_km":750,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_nile_expedition","name":"Nile Expedition","circuit":"Desert Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":850,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_dubai_crown_prince_conference","name":"Dubai Crown Prince Conference","circuit":"Desert Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":150,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_karakum_crossing","name":"Karakum Crossing","circuit":"Desert Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":650,"event_kind":"rated","requires_endurance_title":true},{"key":"desert_circuit_wadi_rum_challenge","name":"Wadi Rum Challenge","circuit":"Desert Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_mongol_derby","name":"Mongol Derby","circuit":"Steppe Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":1000,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_turkmen_s_plate","name":"Turkmen’s Plate","circuit":"Steppe Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":250,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_silk_road_classic","name":"Silk Road Classic","circuit":"Steppe Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":700,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_eurasia_challenge","name":"Eurasia Challenge","circuit":"Steppe Circuit","series":null,"grade":"I","conference":"Both","distance_km":4000,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_dragon_trail","name":"Dragon Trail","circuit":"Steppe Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":900,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_altai_eagle_ride","name":"Altai Eagle Ride","circuit":"Steppe Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":900,"event_kind":"rated","requires_endurance_title":true},{"key":"steppe_circuit_kazakh_eagle_cup","name":"Kazakh Eagle Cup","circuit":"Steppe Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":800,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_new_year_s_cup","name":"New Year’s Cup","circuit":"North American Frontier Circuit","series":null,"grade":"III","conference":"Western","distance_km":300,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_tevis_cup","name":"Tevis Cup","circuit":"North American Frontier Circuit","series":null,"grade":"II","conference":"Western","distance_km":100,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_continental_divide","name":"Continental Divide","circuit":"North American Frontier Circuit","series":null,"grade":"I","conference":"Western","distance_km":5000,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_yukon_gold_rush","name":"Yukon Gold Rush","circuit":"North American Frontier Circuit","series":null,"grade":"II","conference":"Western","distance_km":950,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_route_66_classic","name":"Route 66 Classic","circuit":"North American Frontier Circuit","series":null,"grade":"III","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_maya_mountain_challenge","name":"Maya Mountain Challenge","circuit":"North American Frontier Circuit","series":null,"grade":"III","conference":"Western","distance_km":450,"event_kind":"rated","requires_endurance_title":true},{"key":"north_american_frontier_circuit_volc_n_trail_classic","name":"Volcán Trail Classic","circuit":"North American Frontier Circuit","series":null,"grade":"II","conference":"Western","distance_km":600,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_gaucho_derby","name":"Gaucho Derby","circuit":"South American Circuit","series":null,"grade":"II","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_pampas_classic","name":"Pampas Classic","circuit":"South American Circuit","series":null,"grade":"III","conference":"Western","distance_km":450,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_andes_crossing","name":"Andes Crossing","circuit":"South American Circuit","series":null,"grade":"II","conference":"Western","distance_km":650,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_amazon_basin_trek","name":"Amazon Basin Trek","circuit":"South American Circuit","series":null,"grade":"II","conference":"Western","distance_km":700,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_atacama_crossing","name":"Atacama Crossing","circuit":"South American Circuit","series":null,"grade":"II","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_inca_trail_endurance","name":"Inca Trail Endurance","circuit":"South American Circuit","series":null,"grade":"II","conference":"Western","distance_km":700,"event_kind":"rated","requires_endurance_title":true},{"key":"south_american_circuit_pantanal_expedition","name":"Pantanal Expedition","circuit":"South American Circuit","series":null,"grade":"II","conference":"Western","distance_km":550,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_outback_challenge","name":"Outback Challenge","circuit":"Oceania Circuit","series":null,"grade":"I","conference":"Eastern","distance_km":2600,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_great_barrier_trek","name":"Great Barrier Trek","circuit":"Oceania Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":900,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_tasman_trail_classic","name":"Tasman Trail Classic","circuit":"Oceania Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_southern_alps_ride","name":"Southern Alps Ride","circuit":"Oceania Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":750,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_coral_coast_challenge","name":"Coral Coast Challenge","circuit":"Oceania Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":350,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_kimberley_expedition","name":"Kimberley Expedition","circuit":"Oceania Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":800,"event_kind":"rated","requires_endurance_title":true},{"key":"oceania_circuit_southern_ocean_run","name":"Southern Ocean Run","circuit":"Oceania Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":550,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_great_rift_challenge","name":"Great Rift Challenge","circuit":"African Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":450,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_serengeti_trek","name":"Serengeti Trek","circuit":"African Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":700,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_kalahari_classic","name":"Kalahari Classic","circuit":"African Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":600,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_okavango_challenge","name":"Okavango Challenge","circuit":"African Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_cape_frontier_ride","name":"Cape Frontier Ride","circuit":"African Circuit","series":null,"grade":"II","conference":"Host Dependent","distance_km":650,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_drakensberg_traverse","name":"Drakensberg Traverse","circuit":"African Circuit","series":null,"grade":"I","conference":"Host Dependent","distance_km":800,"event_kind":"rated","requires_endurance_title":true},{"key":"african_circuit_kilimanjaro_challenge","name":"Kilimanjaro Challenge","circuit":"African Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":750,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_aegean_odyssey","name":"Aegean Odyssey","circuit":"Mediterranean Circuit","series":null,"grade":"II","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_adriatic_classic","name":"Adriatic Classic","circuit":"Mediterranean Circuit","series":null,"grade":"III","conference":"Western","distance_km":450,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_sicilian_volcano_run","name":"Sicilian Volcano Run","circuit":"Mediterranean Circuit","series":null,"grade":"III","conference":"Western","distance_km":400,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_iberian_coast_challenge","name":"Iberian Coast Challenge","circuit":"Mediterranean Circuit","series":null,"grade":"II","conference":"Western","distance_km":650,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_cyprus_crossing","name":"Cyprus Crossing","circuit":"Mediterranean Circuit","series":null,"grade":"III","conference":"Host Dependent","distance_km":300,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_amalfi_coast_classic","name":"Amalfi Coast Classic","circuit":"Mediterranean Circuit","series":null,"grade":"II","conference":"Western","distance_km":450,"event_kind":"rated","requires_endurance_title":true},{"key":"mediterranean_circuit_dalmatian_coast_ride","name":"Dalmatian Coast Ride","circuit":"Mediterranean Circuit","series":null,"grade":"II","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_mekong_expedition","name":"Mekong Expedition","circuit":"Southeast Asia Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":700,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_emerald_jungle_challenge","name":"Emerald Jungle Challenge","circuit":"Southeast Asia Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_borneo_rainforest_run","name":"Borneo Rainforest Run","circuit":"Southeast Asia Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":450,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_island_kingdom_classic","name":"Island Kingdom Classic","circuit":"Southeast Asia Circuit","series":null,"grade":"III","conference":"Eastern","distance_km":400,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_dragon_s_peninsula_trek","name":"Dragon’s Peninsula Trek","circuit":"Southeast Asia Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":650,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_angkor_heritage_ride","name":"Angkor Heritage Ride","circuit":"Southeast Asia Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"southeast_asia_circuit_java_volcano_challenge","name":"Java Volcano Challenge","circuit":"Southeast Asia Circuit","series":null,"grade":"II","conference":"Eastern","distance_km":600,"event_kind":"rated","requires_endurance_title":true},{"key":"world_gemstone_tour_the_ruby","name":"The Ruby","circuit":"World Tour","series":"gemstone","grade":"II","conference":"Western","distance_km":1000,"event_kind":"rated","requires_endurance_title":true},{"key":"world_gemstone_tour_the_opal","name":"The Opal","circuit":"World Tour","series":"gemstone","grade":"II","conference":"Eastern","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"world_gemstone_tour_the_emerald","name":"The Emerald","circuit":"World Tour","series":"gemstone","grade":"II","conference":"Western","distance_km":500,"event_kind":"rated","requires_endurance_title":true},{"key":"world_gemstone_tour_the_sapphire","name":"The Sapphire","circuit":"World Tour","series":"gemstone","grade":"II","conference":"Eastern","distance_km":1000,"event_kind":"rated","requires_endurance_title":true},{"key":"world_gemstone_tour_the_pearl","name":"The Pearl","circuit":"World Tour","series":"gemstone","grade":"II","conference":"Eastern","distance_km":1100,"event_kind":"rated","requires_endurance_title":true},{"key":"world_gemstone_tour_the_diamond","name":"The Diamond","circuit":"World Tour","series":"gemstone","grade":"II","conference":"Western","distance_km":1000,"event_kind":"rated","requires_endurance_title":true},{"key":"world_crystal_tour_the_quartz","name":"The Quartz","circuit":"World Tour","series":"crystal","grade":null,"conference":"Western","distance_km":250,"event_kind":"world_tour","requires_endurance_title":false},{"key":"world_crystal_tour_the_jade","name":"The Jade","circuit":"World Tour","series":"crystal","grade":null,"conference":"Eastern","distance_km":300,"event_kind":"world_tour","requires_endurance_title":false},{"key":"world_crystal_tour_the_amber","name":"The Amber","circuit":"World Tour","series":"crystal","grade":null,"conference":"Western","distance_km":250,"event_kind":"world_tour","requires_endurance_title":false},{"key":"world_crystal_tour_the_garnet","name":"The Garnet","circuit":"World Tour","series":"crystal","grade":null,"conference":"Western","distance_km":300,"event_kind":"world_tour","requires_endurance_title":false},{"key":"world_crystal_tour_the_onyx","name":"The Onyx","circuit":"World Tour","series":"crystal","grade":null,"conference":"Eastern","distance_km":300,"event_kind":"world_tour","requires_endurance_title":false},{"key":"world_crystal_tour_the_topaz","name":"The Topaz","circuit":"World Tour","series":"crystal","grade":null,"conference":"Eastern","distance_km":250,"event_kind":"world_tour","requires_endurance_title":false},{"key":"world_tour_amazing_race","name":"The Amazing Race","circuit":"World Tour","series":"amazing_race","grade":null,"conference":"Host Dependent","distance_km":1200,"event_kind":"team","requires_endurance_title":false},{"key":"world_the_western_finals","name":"The Western Finals","circuit":"World Tour","series":"conference_final","grade":"INV","conference":"Western","distance_km":1000,"event_kind":"invitational","requires_endurance_title":false,"qualification_text":"Winner of any Western stakes race"},{"key":"world_the_eastern_challenge","name":"The Eastern Challenge","circuit":"World Tour","series":"conference_final","grade":"INV","conference":"Eastern","distance_km":1000,"event_kind":"invitational","requires_endurance_title":false,"qualification_text":"Winner of any Eastern stakes race"},{"key":"world_the_invitational","name":"The Invitational","circuit":"World Tour","series":"invitational","grade":"INV","conference":"International","distance_km":1500,"event_kind":"invitational","requires_endurance_title":false,"qualification_text":"Grade I/II stakes winner, top three in either final, ENO title, or full series winner"}];


const SS_HUNTING_TITLE_DEFS = {
  flushing:{label:'Flushing',code:'Fl',specializations:{pheasant:['Pheasant','p'],grouse:['Grouse','g'],woodcock:['Woodcock','w'],quail:['Quail','q'],rabbit:['Rabbit','r']}},
  retrieving:{label:'Retrieving',code:'Rt',specializations:{duck:['Duck','d'],goose:['Goose','g'],pheasant:['Pheasant','p'],grouse:['Grouse','gr']}},
  trailing:{label:'Scent / Trailing',code:'Tr',specializations:{rabbit:['Rabbit','r'],hare:['Hare','h'],fox:['Fox','f'],deer:['Deer','d']}},
  treeing_baying:{label:'Treeing / Baying',code:'TB',specializations:{raccoon:['Raccoon','r'],squirrel:['Squirrel','s'],boar:['Boar','bo'],bear:['Bear','br'],cougar:['Cougar','c']}},
  ratting:{label:'Ratting',code:'Rat',specializations:{barn:['Barn','b'],farmyard:['Farmyard','f'],stack_den:['Stack / Den','s'],urban:['Urban','u']}},
  versatile:{label:'Versatile Hunting',code:'VH',specializations:{upland:['Upland','u'],waterfowl:['Waterfowl','w'],woodland:['Woodland','f'],mixed_field:['Mixed Field','m']}},
  coursing:{label:'Coursing',code:'Co',specializations:{rabbit:['Rabbit','r'],hare:['Hare','h'],fox:['Fox','f'],coyote_jackal:['Coyote / Jackal','c'],deer_gazelle:['Deer / Gazelle','d']}},
  falconry:{label:'Falconry',code:'Fa',specializations:{rabbit:['Rabbit','r'],hare:['Hare','h'],pheasant:['Pheasant','p'],grouse:['Grouse','g'],quail:['Quail','q'],waterfowl:['Waterfowl','w']}},
  pack_hunting:{label:'Pack Hunting',code:'PH',specializations:{rabbit:['Rabbit','r'],hare:['Hare','h'],fox:['Fox','f'],coyote_jackal:['Coyote / Jackal','c'],boar:['Boar','b'],deer:['Deer','d']}},
  catch_dogs:{label:'Catch Dogs',code:'CD',specializations:{boar:['Boar','b'],feral_pig:['Feral Pig','p'],cattle:['Cattle','c'],bull:['Bull','bu']}}
};


const SS_HUNTING_TITLE_LEVELS = {
  beginners:{label:'Beginners',prefix:'B',required:5},
  expert:{label:'Expert',prefix:'E',required:10},
  masters:{label:'Masters',prefix:'M',required:15}
};


function isManualScoreRecord(record) {
  const cls = normalizeProfileKey(record?.class);
  const label = normalizeProfileKey(record?.score_label);
  const show = normalizeProfileKey(record?.show_name);

  return (
    cls.includes("temperament") ||
    cls.includes("therapy") ||
    cls.includes("canine good citizen") ||
    cls.includes("instinct test") ||
    cls.includes("instinct testing") ||
    label.includes("temperament") ||
    label.includes("therapy") ||
    label.includes("canine good citizen") ||
    label.includes("instinct test") ||
    label.includes("instinct testing") ||
    show.includes("temperament") ||
    show.includes("therapy") ||
    show.includes("canine good citizen") ||
    show.includes("instinct test") ||
    show.includes("instinct testing") ||
    show.includes("cgc")
  );
}

function isBestInFieldActivityRecord(record) {
  if (normalizeProfileKey(record?.show_type) !== "activity") return false;

  const className = normalizeProfileKey(record?.class);
  const placement = normalizeProfileKey(record?.placement);

  return (
    className.includes("best in field") ||
    placement.includes("best in field") ||
    className === "bif" ||
    className === "mbif" ||
    placement === "bif" ||
    placement === "mbif"
  );
}

function calculateTestingTitles(records, animal) {
  const species = normalizeProfileKey(animal?.species);
  const suffixes = [];
  const rows = [];
  const speciesCodes = {
    dog: { temperament: "TTD", therapy: "TAD" },
    cat: { temperament: "TTC", therapy: "TAC" },
    horse: { temperament: "TTH", therapy: "TAH" }
  };
  const codes = speciesCodes[species];
  if (!codes) return { suffixes, rows };

  const temperamentPassed = (records || []).some(r =>
    normalizeProfileKey(r?.show_type) === "activity" &&
    (normalizeProfileKey(r?.activity_key) === "temperament_test" || normalizeProfileKey(r?.class).includes("temperament test")) &&
    Number(r?.score) >= 110
  );
  if (temperamentPassed) {
    /*
      The standard activity/title-rule display already creates the detailed
      Temperament row (including the actual score, e.g. Pass — 188/200).
      Keep the earned suffix here, but do NOT add a second award row.
    */
    suffixes.push(codes.temperament);
  }

  const therapyPasses = (records || []).filter(r =>
    normalizeProfileKey(r?.show_type) === "activity" &&
    (normalizeProfileKey(r?.activity_key) === "therapy_animal" || normalizeProfileKey(r?.class).includes("therapy animal test")) &&
    Number(r?.score) >= 110
  ).length;
  if (therapyPasses) {
    /*
      Therapy is also already represented by the normal title-rule display.
      Only add the registered-name suffix here so the Show Records page does
      not render a duplicate Therapy title row.
    */
    suffixes.push(codes.therapy);
  }

  if (species === "dog") {
    const levels = [
      {key:"cgc",code:"CGC",name:"Canine Good Citizen",rank:1},
      {key:"cgcb",code:"CGCB",name:"Canine Good Citizen Bronze",rank:2},
      {key:"cgcs",code:"CGCS",name:"Canine Good Citizen Silver",rank:3},
      {key:"cgcg",code:"CGCG",name:"Canine Good Citizen Gold",rank:4},
      {key:"cgca",code:"CGCA",name:"Canine Good Citizen Advanced",rank:5},
      {key:"cgcu",code:"CGCU",name:"Canine Good Citizen Urban",rank:6}
    ];
    const earned=levels.filter(level => (records || []).some(r =>
      normalizeProfileKey(r?.show_type)==="activity" &&
      r?.passed===true &&
      (normalizeProfileKey(r?.activity_key)===level.key || normalizeProfileKey(r?.score_label)===normalizeProfileKey(level.code) || normalizeProfileKey(r?.class)===normalizeProfileKey(level.name))
    ));
    if (earned.length) {
      const highest=earned.sort((a,b)=>b.rank-a.rank)[0];
      suffixes.push(highest.code);
      rows.push({titleName:highest.name,titleCode:highest.code,count:"Passed",sort:762});
    }
  }
  return { suffixes: profileUniqueTitleList(suffixes), rows };
}

function calculateIcelandicAssociationTitles(records, animal) {
  if (normalizeProfileKey(animal?.species) !== "horse") {
    return { prefixes: [], suffixes: [], rows: [] };
  }

  const ihass = (records || []).filter(record =>
    normalizeProfileKey(record?.association_key) === "ihass"
  );

  const pointsFor = eventType =>
    ihass
      .filter(record => normalizeProfileKey(record?.association_event_type) === eventType)
      .reduce((sum, record) => sum + profilePointsValue(record), 0);

  const halterPoints = pointsFor("halter");
  const gaitingPoints = pointsFor("gaiting");
  const breedingPoints = pointsFor("breeding");

  const breedingCertificates = ihass.filter(record =>
    normalizeProfileKey(record?.association_event_type) === "breeding" &&
    Number.isFinite(Number(record?.score)) &&
    Number(record.score) >= 120
  ).length;

  const prefixes = [];
  const rows = [];

  // Higher titles replace lower titles within each IHASS track.
  if (halterPoints >= 1500) {
    prefixes.push("IHGCh.");
    rows.push({ titleName: "Icelandic Horse Grand Champion", titleCode: "IHGCh.", count: halterPoints + " IHASS Halter points", sort: 780 });
  } else if (halterPoints >= 500) {
    prefixes.push("IHCh.");
    rows.push({ titleName: "Icelandic Horse Champion", titleCode: "IHCh.", count: halterPoints + " IHASS Halter points", sort: 780 });
  }

  if (gaitingPoints >= 500) {
    prefixes.push("GSGCh.");
    rows.push({ titleName: "Gaiting Show Grand Champion", titleCode: "GSGCh.", count: gaitingPoints + " IHASS Gaiting points", sort: 781 });
  } else if (gaitingPoints >= 250) {
    prefixes.push("GSCh.");
    rows.push({ titleName: "Gaiting Show Champion", titleCode: "GSCh.", count: gaitingPoints + " IHASS Gaiting points", sort: 781 });
  }

  if (breedingCertificates >= 8 && breedingPoints >= 1200) {
    prefixes.push("BSGCh.");
    rows.push({
      titleName: "Breeding Show Grand Champion",
      titleCode: "BSGCh.",
      count: breedingCertificates + " certificates • " + breedingPoints + " IHASS Breeding points",
      sort: 782
    });
  } else if (breedingCertificates >= 3 && breedingPoints >= 500) {
    prefixes.push("BSCh.");
    rows.push({
      titleName: "Breeding Show Champion",
      titleCode: "BSCh.",
      count: breedingCertificates + " certificates • " + breedingPoints + " IHASS Breeding points",
      sort: 782
    });
  }

  return { prefixes: profileUniqueTitleList(prefixes), suffixes: [], rows };
}

function enduranceNumericPlacement(record) {
  const match = String(record?.placement || "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

function enduranceSeason(record) {
  const explicit = Number(record?.endurance_season);
  if (Number.isFinite(explicit) && explicit > 1900) return explicit;

  const dateText = String(record?.event_date || "");
  const match = dateText.match(/^(\d{4})/);
  return match ? Number(match[1]) : null;
}

function enduranceTitleRaceDefinition(record) {
  const key = String(record?.endurance_race_key || "");
  return SS_ENDURANCE_TITLE_RACES.find(race => race.key === key) || null;
}

function calculateHuntingClubTitles(records, animal) {
  if (normalizeProfileKey(animal?.species) !== 'dog') {
    return {suffixes:[],rows:[]};
  }

  const club = (records || []).filter(record =>
    normalizeProfileKey(record?.association_key) === 'hunting club' &&
    normalizeProfileKey(record?.association_event_type) === 'field test'
  );

  if (!club.length) return {suffixes:[],rows:[]};

  const grouped = {};

  club.forEach(record => {
    const family = record.hunting_family;
    const specialization = record.hunting_specialization;
    const level = record.hunting_level;

    if (!family || !specialization || !SS_HUNTING_TITLE_LEVELS[level]) return;

    const key = family + '::' + specialization;
    if (!grouped[key]) {
      grouped[key] = {
        family,
        specialization,
        counts:{beginners:0,expert:0,masters:0}
      };
    }

    if (record.passed === true) grouped[key].counts[level]++;
  });

  const suffixes = [];
  const rows = [];

  Object.values(grouped).forEach(group => {
    const familyDef = SS_HUNTING_TITLE_DEFS[group.family];
    const specDef = familyDef?.specializations?.[group.specialization];
    if (!familyDef || !specDef) return;

    let earnedLevel = null;

    if (group.counts.masters >= SS_HUNTING_TITLE_LEVELS.masters.required) earnedLevel = 'masters';
    else if (group.counts.expert >= SS_HUNTING_TITLE_LEVELS.expert.required) earnedLevel = 'expert';
    else if (group.counts.beginners >= SS_HUNTING_TITLE_LEVELS.beginners.required) earnedLevel = 'beginners';

    if (earnedLevel) {
      const levelDef = SS_HUNTING_TITLE_LEVELS[earnedLevel];
      const code = levelDef.prefix + familyDef.code + specDef[1];
      suffixes.push(code);

      rows.push({
        titleName: levelDef.label + ' ' + familyDef.label + ' — ' + specDef[0],
        titleCode: code,
        count: group.counts[earnedLevel] + ' qualifying tests',
        sort: 770
      });
    } else {
      const next = SS_HUNTING_TITLE_LEVELS.beginners;
      rows.push({
        titleName: familyDef.label + ' — ' + specDef[0] + ' Field Test',
        titleCode: '—',
        count: group.counts.beginners + '/' + next.required + ' Beginners qualifications',
        sort: 771
      });
    }
  });

  return {
    suffixes: profileUniqueTitleList(suffixes),
    rows
  };
}

function calculateEnduranceClubTitles(records, animal) {
  if (normalizeProfileKey(animal?.species) !== "horse") {
    return { prefixes: [], suffixes: [], rows: [] };
  }

  const club = (records || []).filter(record =>
    normalizeProfileKey(record?.association_key) === "endurance club"
  );

  if (!club.length) {
    return { prefixes: [], suffixes: [], rows: [] };
  }

  const prefixes = [];
  const suffixes = [];
  const rows = [];

  const completed = club.filter(record =>
    record?.endurance_completed !== false &&
    normalizeProfileKey(record?.association_event_type) !== "prospect"
  );

  const totalDistance = completed.reduce(
    (sum, record) => sum + Number(record?.endurance_distance_km || 0),
    0
  );

  const totalWinnings = club.reduce(
    (sum, record) => sum + Number(record?.endurance_winnings || 0),
    0
  );

  /*
    RACE-WINNING TITLES
    Higher titles replace lower titles within each grade.
  */
  const winsByGrade = { I: 0, II: 0, III: 0, INV: 0 };

  club.forEach(record => {
    if (enduranceNumericPlacement(record) !== 1) return;
    const grade = String(record?.endurance_grade || "").toUpperCase();
    if (winsByGrade[grade] !== undefined) winsByGrade[grade]++;
  });

  const gradeTitle = (grade, single, multi, grand, grandThreshold=5) => {
    const wins = winsByGrade[grade] || 0;

    if (wins >= grandThreshold) {
      prefixes.push(grand);
      rows.push({
        titleName: grand,
        titleCode: grand,
        count: `${wins} Grade ${grade} wins`,
        sort: 810
      });
    } else if (wins >= 2) {
      suffixes.push(multi);
      rows.push({
        titleName: multi,
        titleCode: multi,
        count: `${wins} Grade ${grade} wins`,
        sort: 810
      });
    } else if (wins >= 1) {
      suffixes.push(single);
      rows.push({
        titleName: single,
        titleCode: single,
        count: `${wins} Grade ${grade} win`,
        sort: 810
      });
    }
  };

  gradeTitle("III","EdSIII","MEdSIII","GChEdSIII");
  gradeTitle("II","EdSII","MEdSII","GChEdSII");

  /*
    Grade I:
      EdSI / MEdSI count actual Grade I wins.
      GChEdSI may use Grade I OR Invitational wins.
  */
  const gradeIWins = winsByGrade.I || 0;
  const gradeIOrInvitational = gradeIWins + (winsByGrade.INV || 0);

  if (gradeIOrInvitational >= 5) {
    prefixes.push("GChEdSI");
    rows.push({
      titleName: "Grand Champion Endurance Stakes I Winner",
      titleCode: "GChEdSI",
      count: `${gradeIOrInvitational} Grade I / Invitational wins`,
      sort: 811
    });
  } else if (gradeIWins >= 2) {
    suffixes.push("MEdSI");
    rows.push({
      titleName: "Multi Endurance Club Stakes I Winner",
      titleCode: "MEdSI",
      count: `${gradeIWins} Grade I wins`,
      sort: 811
    });
  } else if (gradeIWins >= 1) {
    suffixes.push("EdSI");
    rows.push({
      titleName: "Endurance Club Stakes I",
      titleCode: "EdSI",
      count: `${gradeIWins} Grade I win`,
      sort: 811
    });
  }

  /*
    DISTANCE TITLES — Endurance Club kilometres only.
  */
  if (totalDistance >= 100000) {
    prefixes.push("EdDL");
    rows.push({titleName:"Endurance Club Distance Legend",titleCode:"EdDL",count:`${Math.round(totalDistance).toLocaleString()} km`,sort:820});
  } else if (totalDistance >= 50000) {
    prefixes.push("EdDHoF");
    rows.push({titleName:"Endurance Club Distance Hall of Fame",titleCode:"EdDHoF",count:`${Math.round(totalDistance).toLocaleString()} km`,sort:820});
  } else if (totalDistance >= 30000) {
    suffixes.push("EdDGCh");
    rows.push({titleName:"Endurance Club Distance Grand Champion",titleCode:"EdDGCh",count:`${Math.round(totalDistance).toLocaleString()} km`,sort:820});
  } else if (totalDistance >= 20000) {
    suffixes.push("EdDCh");
    rows.push({titleName:"Endurance Club Distance Champion",titleCode:"EdDCh",count:`${Math.round(totalDistance).toLocaleString()} km`,sort:820});
  }

  /*
    EARNINGS TITLES — actual money stored on Endurance Club records only.
  */
  const moneyLabel = "$" + Math.round(totalWinnings).toLocaleString();

  if (totalWinnings >= 150000) {
    prefixes.push("EdHOFE");
    rows.push({titleName:"Endurance Club Hall of Fame Earner",titleCode:"EdHOFE",count:moneyLabel,sort:821});
  } else if (totalWinnings >= 100000) {
    suffixes.push("EdSpH");
    rows.push({titleName:"Endurance Club Superior High Earner",titleCode:"EdSpH",count:moneyLabel,sort:821});
  } else if (totalWinnings >= 50000) {
    suffixes.push("EdHE");
    rows.push({titleName:"Endurance Club High Earner",titleCode:"EdHE",count:moneyLabel,sort:821});
  }

  /*
    SAME-SEASON SERIES + CIRCUIT TITLES
  */
  const bySeason = {};

  club.forEach(record => {
    const season = enduranceSeason(record);
    if (!season) return;

    if (!bySeason[season]) bySeason[season] = [];
    bySeason[season].push(record);
  });

  const circuitCodes = {
    "Northern Circuit": {completion:"NCCC",excellence:"NCCE",champion:"NCCCh",sweep:"NCCS"},
    "Desert Circuit": {completion:"DCCC",excellence:"DCCE",champion:"DCCh",sweep:"DCS"},
    "Steppe Circuit": {completion:"SCCC",excellence:"SCCE",champion:"SCCh",sweep:"SCS"},
    "North American Frontier Circuit": {completion:"NaCC",excellence:"NaCE",champion:"NaCh",sweep:"NaCS"},
    "South American Circuit": {completion:"SaCC",excellence:"SaCE",champion:"SaCh",sweep:"SaCS"},
    "Oceania Circuit": {completion:"OCCC",excellence:"OCCE",champion:"OCCh",sweep:"OCS"},
    "African Circuit": {completion:"ACCC",excellence:"ACCE",champion:"ACCh",sweep:"ACCS"},
    "Mediterranean Circuit": {completion:"MdCC",excellence:"MdCE",champion:"MdCCh",sweep:"MdCS"},
    "Southeast Asia Circuit": {completion:"SeaCC",excellence:"SeaCE",champion:"SeaCCh",sweep:"SeaCS"},
    "World Tour": {completion:"WTCC",excellence:"WTCE",champion:"WTCCh",sweep:"WTCS"}
  };

  Object.entries(bySeason).forEach(([season, seasonRecords]) => {
    const seasonNumber = Number(season);

    /*
      Regional circuits: exactly the seven catalog races in that circuit.
    */
    Object.keys(circuitCodes)
      .filter(circuit => circuit !== "World Tour")
      .forEach(circuit => {
        const required = SS_ENDURANCE_TITLE_RACES
          .filter(race => race.circuit === circuit)
          .map(race => race.key);

        if (!required.length) return;

        const circuitRecords = seasonRecords.filter(record =>
          normalizeProfileKey(record?.endurance_circuit) === normalizeProfileKey(circuit)
        );

        const competed = new Set(
          circuitRecords
            .filter(record => record?.endurance_completed !== false)
            .map(record => record.endurance_race_key)
        );

        const placed = new Set(
          circuitRecords
            .filter(record => {
              const place = enduranceNumericPlacement(record);
              return place !== null && place >= 1 && place <= 5;
            })
            .map(record => record.endurance_race_key)
        );

        const won = new Set(
          circuitRecords
            .filter(record => enduranceNumericPlacement(record) === 1)
            .map(record => record.endurance_race_key)
        );

        const codes = circuitCodes[circuit];

        if (required.every(key => competed.has(key))) {
          suffixes.push(codes.completion);
          rows.push({titleName:`${circuit} Completion`,titleCode:codes.completion,count:String(seasonNumber),sort:830});
        }

        if (required.every(key => placed.has(key))) {
          suffixes.push(codes.excellence);
          rows.push({titleName:`${circuit} Excellence`,titleCode:codes.excellence,count:String(seasonNumber),sort:831});
        }

        if (required.every(key => won.has(key))) {
          suffixes.push(codes.sweep);
          rows.push({titleName:`${circuit} Sweep`,titleCode:codes.sweep,count:String(seasonNumber),sort:832});
        }
      });

    /*
      WORLD TOUR:
      GemStone OR Crystal may independently satisfy Completion / Excellence / Sweep.
    */
    const worldCodes = circuitCodes["World Tour"];

    ["gemstone","crystal"].forEach(series => {
      const required = SS_ENDURANCE_TITLE_RACES
        .filter(race => race.circuit === "World Tour" && race.series === series)
        .map(race => race.key);

      if (!required.length) return;

      const seriesRecords = seasonRecords.filter(record =>
        normalizeProfileKey(record?.endurance_series) === series
      );

      const competed = new Set(seriesRecords.map(record => record.endurance_race_key));
      const placed = new Set(
        seriesRecords
          .filter(record => {
            const place = enduranceNumericPlacement(record);
            return place !== null && place >= 1 && place <= 5;
          })
          .map(record => record.endurance_race_key)
      );
      const won = new Set(
        seriesRecords
          .filter(record => enduranceNumericPlacement(record) === 1)
          .map(record => record.endurance_race_key)
      );

      if (required.every(key => competed.has(key))) {
        suffixes.push(worldCodes.completion);
        rows.push({
          titleName:"World Tour Circuit Completion",
          titleCode:worldCodes.completion,
          count:`${seasonNumber} • ${series === "gemstone" ? "GemStone" : "Crystal"} path`,
          sort:834
        });
      }

      if (required.every(key => placed.has(key))) {
        suffixes.push(worldCodes.excellence);
        rows.push({
          titleName:"World Tour Circuit Excellence",
          titleCode:worldCodes.excellence,
          count:`${seasonNumber} • ${series === "gemstone" ? "GemStone" : "Crystal"} path`,
          sort:835
        });
      }

      if (required.every(key => won.has(key))) {
        suffixes.push(worldCodes.sweep);
        rows.push({
          titleName:"World Tour Circuit Sweep",
          titleCode:worldCodes.sweep,
          count:`${seasonNumber} • ${series === "gemstone" ? "GemStone" : "Crystal"} path`,
          sort:836
        });

        if (series === "gemstone") {
          suffixes.push("EdGS");
          rows.push({titleName:"Gem Stone Series Winner",titleCode:"EdGS",count:String(seasonNumber),sort:837});
        }

        if (series === "crystal") {
          suffixes.push("EdCS");
          rows.push({titleName:"Crystal Tour Winner",titleCode:"EdCS",count:String(seasonNumber),sort:837});
        }
      }
    });
  });

  /*
    Circuit Champion synthetic rows are appended by loadRecords() from
    the endurance_circuit_champions view.
  */
  club
    .filter(record => normalizeProfileKey(record?.association_event_type) === "circuit champion")
    .forEach(record => {
      const circuit = record.endurance_circuit;
      const codeMap = circuitCodes[circuit];
      if (!codeMap) return;

      prefixes.push(codeMap.champion);
      rows.push({
        titleName: `${circuit} Champion`,
        titleCode: codeMap.champion,
        count: `${record.endurance_season} • ${Number(record.points || 0).toLocaleString()} circuit points`,
        sort: 833
      });
    });

  /*
    Explicit named-series titles supported now/future.
  */
  const firstPlaceRaceNames = new Set(
    club
      .filter(record => enduranceNumericPlacement(record) === 1)
      .map(record => normalizeProfileKey(record?.endurance_race_name))
  );

  if (firstPlaceRaceNames.has("dubai crown prince endurance cup")) {
    suffixes.push("DCPEC");
    rows.push({titleName:"Dubai Crown Prince Endurance Cup",titleCode:"DCPEC",count:"Winner",sort:840});
  }

  const seriesSweepRules = [
    {series:"world_holiday_challenge",required:4,code:"EdWHC",name:"Endurance Club World Holiday Challenge Winner"},
    {series:"winter_constellation_challenge",required:4,code:"EdWCC",name:"Endurance Club Winter Constellation Challenge"},
    {series:"solar_challenge",required:4,code:"EdSCC",name:"Endurance Club Solar Challenge"}
  ];

  seriesSweepRules.forEach(rule => {
    const winsBySeason = {};

    club.forEach(record => {
      if (
        normalizeProfileKey(record?.endurance_series) !== rule.series ||
        enduranceNumericPlacement(record) !== 1
      ) return;

      const season = enduranceSeason(record);
      if (!season) return;

      if (!winsBySeason[season]) winsBySeason[season] = new Set();
      winsBySeason[season].add(record.endurance_race_key);
    });

    if (Object.values(winsBySeason).some(set => set.size >= rule.required)) {
      suffixes.push(rule.code);
      rows.push({titleName:rule.name,titleCode:rule.code,count:"Same-season series winner",sort:841});
    }
  });

  /*
    Always expose cumulative Endurance Club totals in the title/progress list,
    even before a threshold is reached.
  */
  rows.push({
    titleName:"Endurance Club Distance",
    titleCode:"—",
    count:`${Math.round(totalDistance).toLocaleString()} km completed`,
    sort:899
  });

  rows.push({
    titleName:"Endurance Club Winnings",
    titleCode:"—",
    count:"$" + Math.round(totalWinnings).toLocaleString(),
    sort:900
  });

  return {
    prefixes: profileUniqueTitleList(prefixes),
    suffixes: profileUniqueTitleList(suffixes),
    rows
  };
}

const profileBreedingAwardCache = new Map();

async function getProfileBreedingAwardCounts(animal) {
  if (!animal?.id) {
    return { championOffspring: 0, sprWchOffspring: 0 };
  }

  const cacheKey = String(animal.id);

  if (profileBreedingAwardCache.has(cacheKey)) {
    return profileBreedingAwardCache.get(cacheKey);
  }

  const promise = (async () => {
    const supabase = getSupabase();

    /*
      Current Show Standard pedigree links use UUID sire/dam values.
      Keep this query UUID-only: sending animal_number into UUID sire/dam
      columns can cause Postgres type errors and leave the profile on Loading.
    */
    const { data, error } = await supabase
      .from("animals")
      .select("id, conformation_points")
      .or(`sire.eq.${animal.id},dam.eq.${animal.id}`);

    if (error) {
      console.warn("Breeding award lookup warning:", error.message);
      return { championOffspring: 0, sprWchOffspring: 0 };
    }

    const offspring = data || [];

    return {
      championOffspring: offspring.filter(child => {
        const points = Number(child?.conformation_points || 0);
        return Number.isFinite(points) && points >= 250;
      }).length,

      sprWchOffspring: offspring.filter(child => {
        const points = Number(child?.conformation_points || 0);
        return Number.isFinite(points) && points >= 5000;
      }).length
    };
  })().catch(error => {
    console.warn("Breeding award calculation warning:", error);
    return { championOffspring: 0, sprWchOffspring: 0 };
  });

  profileBreedingAwardCache.set(cacheKey, promise);
  return promise;
}

async async function buildProfileTitleName(animal) {
  const supabase = getSupabase();
  const baseName = String(animal?.name || "").trim();
  if (!supabase || !animal?.id || !baseName) return baseName;

  const [recordsResult, titleRulesResult, activityRulesResult, activityTypesResult] = await Promise.all([
    supabase.from("show_records").select("*").eq("animal_id", animal.id),
    supabase.from("title_rules").select("*").eq("active", true),
    supabase.from("activity_title_rules").select("*").eq("active", true),
    supabase.from("activity_types").select("*").eq("active", true)
  ]);

  if (recordsResult.error) {
    console.warn("Profile title record load error:", recordsResult.error.message);
    return baseName;
  }

  const records = recordsResult.data || [];
  const titleRules = titleRulesResult.data || [];
  const activityRules = activityRulesResult.data || [];
  const activityTypes = activityTypesResult.data || [];

  const conformationRecords = records.filter(
    r => canonicalProfileShowType(r?.show_type) === "conformation"
  );
  const activityRecords = records.filter(
    r => canonicalProfileShowType(r?.show_type) === "activity"
  );

  const prefixes = [];
  const suffixes = [];
  const earnedTitleCodes = [];

  /* BIS/BISS exactly as the popup: actual wins, not CH-gated. */
  const allBreedBIS = countUniqueProfileAwardWins(
    conformationRecords,
    isProfileAllBreedBestInShow,
    "bis"
  );
  const specialtyBIS = countUniqueProfileAwardWins(
    conformationRecords,
    isProfileSpecialtyBestInShow,
    "biss"
  );

  if (allBreedBIS >= 2) prefixes.push("MBIS");
  else if (allBreedBIS >= 1) prefixes.push("BIS");

  if (specialtyBIS >= 2) prefixes.push("MBISS");
  else if (specialtyBIS >= 1) prefixes.push("BISS");

  /* Highest active conformation title only. */
  const conformationPoints = Number(animal?.conformation_points || 0);
  const confRules = titleRules
    .filter(r => normalizeProfileKey(r?.applies_to) === "conformation")
    .filter(r => Number(r?.points_required || 0) <= conformationPoints)
    .sort((a, b) => Number(b?.points_required || 0) - Number(a?.points_required || 0));

  if (confRules[0]?.title_code) {
    const code = String(confRules[0].title_code).trim();
    const position = normalizeProfileKey(confRules[0]?.title_position || "prefix");
    if (position === "suffix") suffixes.push(code);
    else prefixes.push(code);
    earnedTitleCodes.push(code);
  }

  /*
    STANDARD ACTIVITIES — use the same model as Show Records:
    1. resolve every record to its canonical activity
    2. total points per activity
    3. choose highestTitle() from that activity's rules
    4. display only that title, in its configured position
  */
  const activityTotals = calculateActivityTotals(activityRecords, activityTypes);

  Object.keys(activityTotals).forEach(key => {
    const total = activityTotals[key];
    const rules = getActivityRulesForTotal(total, activityRules);
    const title = highestTitle(total.points, rules);
    const displayedTitle = title ? displayActivityTitle(title, total.points) : "";

    if (!title || !displayedTitle) return;

    earnedTitleCodes.push(title.title_code);
    earnedTitleCodes.push(displayedTitle);

    const codeKey = profileTitleCodeKey(title.title_code);
    const position =
      codeKey === "tdch"
        ? "prefix"
        : normalizeProfileKey(title.title_position || "suffix");

    if (position === "prefix") prefixes.push(displayedTitle);
    else suffixes.push(displayedTitle);
  });

  /* Manual titles: preserve them, but collapse CGC to the highest level. */
  splitProfileTitleCodes(animal?.manual_prefix_titles).forEach(code => {
    prefixes.push(code);
    earnedTitleCodes.push(code);
  });

  const manualSuffix = collapseProfileManualTitles(animal?.manual_suffix_titles);
  splitProfileTitleCodes(manualSuffix).forEach(code => {
    suffixes.push(code);
    earnedTitleCodes.push(code);
  });

  /*
    Versatility is earned from the same title pool, but only the HIGHEST
    versatility award is shown.  This matches the popup behavior instead of
    stacking VNC/VAC/VEC/etc.
  */
  const versatility = calculateProfileVersatilityTitle(animal, earnedTitleCodes);
  if (versatility?.code) {
    suffixes.push(versatility.code);
  }

  const totalAwards = await loadProfileTotalAwards(animal, activityRecords, activityTypes);
  suffixes.push(...totalAwards);

  return [
    ...uniqueProfileTitles(prefixes),
    baseName,
    ...uniqueProfileTitles(suffixes)
  ].filter(Boolean).join(" ");
}

function parseImportedPedigree(animal) {
  if (!animal || !animal.imported_pedigree) return null;

  try {
    return typeof animal.imported_pedigree === "string"
      ? JSON.parse(animal.imported_pedigree)
      : animal.imported_pedigree;
  } catch (err) {
    console.warn("Could not parse imported pedigree for", animal?.name, err);
    return null;
  }
}

function importedPedigreeAnimal(name) {
  if (!name) return null;

  return {
    name: name,
    breed: "",
    importedOnly: true
  };
}

async function buildPedigree(rootAnimal) {
  const rootImported = parseImportedPedigree(rootAnimal);

  const [sire, dam] = await Promise.all([
    Resolver.animal(rootAnimal.sire),
    Resolver.animal(rootAnimal.dam)
  ]);

  const sireImported = parseImportedPedigree(sire);
  const damImported = parseImportedPedigree(dam);

  const [sireSire, sireDam, damSire, damDam] = await Promise.all([
    sire ? Resolver.animal(sire.sire) : null,
    sire ? Resolver.animal(sire.dam) : null,
    dam ? Resolver.animal(dam.sire) : null,
    dam ? Resolver.animal(dam.dam) : null
  ]);

  return {
    root: rootAnimal,
    parents: {
      sire: sire || importedPedigreeAnimal(rootImported?.sire),
      dam: dam || importedPedigreeAnimal(rootImported?.dam)
    },
    grandparents: {
      sireSire: sireSire || importedPedigreeAnimal(sireImported?.sire) || importedPedigreeAnimal(rootImported?.sire_sire),
      sireDam: sireDam || importedPedigreeAnimal(sireImported?.dam) || importedPedigreeAnimal(rootImported?.sire_dam),
      damSire: damSire || importedPedigreeAnimal(damImported?.sire) || importedPedigreeAnimal(rootImported?.dam_sire),
      damDam: damDam || importedPedigreeAnimal(damImported?.dam) || importedPedigreeAnimal(rootImported?.dam_dam)
    }
  };
}

async function getLiveRegisteredName(animal) {
  if (!animal) return "Unknown";
  if (animal.importedOnly || !animal.animal_number) {
    return animal.name || "Unnamed";
  }

  const cacheKey = String(animal.id || animal.animal_number);

  if (!liveRegisteredNameCache.has(cacheKey)) {
    liveRegisteredNameCache.set(cacheKey, (async () => {
      const records = await getShowRecords(animal.animal_number, animal.id);
      const titleInfo = await buildProfileTitleName(animal, records);
      return titleInfo.registeredName || animal.name || "Unnamed";
    })().catch(error => {
      console.error("Title display error for", animal.name, error);
      liveRegisteredNameCache.delete(cacheKey);
      return animal.name || "Unnamed";
    }));
  }

  return liveRegisteredNameCache.get(cacheKey);
}

async function pedigreeBox(animal) {
  if (!animal) {
    return `<div class="pedigree-box empty">Unknown</div>`;
  }

  const name = await getLiveRegisteredName(animal);
  const breed = animal.breed || "";

  if (!animal.animal_number) {
    return `
      <div class="pedigree-box">
        <div class="p-name">${name}</div>
        <div class="p-breed">${breed || "Imported pedigree"}</div>
      </div>
    `;
  }

  return `
    <div class="pedigree-box" onclick="openProfileByNumber('${animal.id || animal.animal_number}')">
      <div class="p-name">${name}</div>
      <div class="p-breed">${breed}</div>
    </div>
  `;
}

async function renderPedigree(tree) {
  const target = document.getElementById("pedigreeBox");

  if (!tree) {
    target.innerHTML = `<div class="box">No pedigree recorded.</div>`;
    return;
  }

  const [
    sireSireBox,
    sireDamBox,
    damSireBox,
    damDamBox,
    sireBox,
    damBox,
    rootBox
  ] = await Promise.all([
    pedigreeBox(tree.grandparents.sireSire),
    pedigreeBox(tree.grandparents.sireDam),
    pedigreeBox(tree.grandparents.damSire),
    pedigreeBox(tree.grandparents.damDam),
    pedigreeBox(tree.parents.sire),
    pedigreeBox(tree.parents.dam),
    pedigreeBox(tree.root)
  ]);

  target.innerHTML = `
    <div class="pedigree">
      <div class="gen-label">Grandparents</div>

      <div class="row">
        ${sireSireBox}
        ${sireDamBox}
        ${damSireBox}
        ${damDamBox}
      </div>

      <div class="gen-label">Parents</div>

      <div class="row">
        ${sireBox}
        ${damBox}
      </div>

      <div class="gen-label">Subject</div>

      <div class="row">
        ${rootBox}
      </div>
    </div>
  `;
}

async function loadOffspring(animalNumber, animalId = null) {
  const supabase = getSupabase();
  const body = document.querySelector("#offspringTable tbody");
  if (!body) return;

  const columns = "id,animal_number,name,owner,co_owner,breeder,birthyear,colour,gender,species,breed,manual_prefix_titles,manual_suffix_titles,conformation_points";
  const queries = [];

  if (animalNumber !== null && animalNumber !== undefined && animalNumber !== "") {
    queries.push(
      supabase.from("animals").select(columns)
        .or(`sire.eq.${Number(animalNumber)},dam.eq.${Number(animalNumber)}`)
    );
  }

  if (animalId) {
    queries.push(
      supabase.from("animals").select(columns)
        .or(`sire.eq.${animalId},dam.eq.${animalId}`)
    );
  }

  const results = await Promise.all(queries);
  const seen = new Set();
  const allRows = [];

  results.forEach(({ data, error }) => {
    if (error) {
      console.error("Offspring query error:", error);
      return;
    }

    (data || []).forEach(row => {
      const key = String(row.id || row.animal_number);
      if (!seen.has(key)) {
        seen.add(key);
        allRows.push(row);
        Resolver.animalCache.set(String(row.id), Promise.resolve(row));
        Resolver.animalCache.set(String(row.animal_number), Promise.resolve(row));
      }
    });
  });

  if (!allRows.length) {
    body.innerHTML = `<tr><td colspan="6">No offspring recorded</td></tr>`;
    return;
  }

  const numberList = allRows.map(a => Number(a.animal_number)).filter(Number.isFinite);
  const idList = allRows.map(a => a.id).filter(Boolean);
  const recordQueries = [];
  const recordColumns = "*";

  if (numberList.length) {
    recordQueries.push(supabase.from("show_records").select(recordColumns).in("animal_number", numberList));
  }
  if (idList.length) {
    recordQueries.push(supabase.from("show_records").select(recordColumns).in("animal_id", idList));
  }

  const recordResults = await Promise.all(recordQueries);
  const recordsByAnimal = new Map();
  const recordSeen = new Set();

  recordResults.forEach(({ data, error }) => {
    if (error) {
      console.error("Offspring title record error:", error);
      return;
    }

    (data || []).forEach(record => {
      const dedupe = String(record.id);
      if (recordSeen.has(dedupe)) return;
      recordSeen.add(dedupe);

      const keys = [String(record.animal_id || ""), String(record.animal_number || "")].filter(Boolean);
      keys.forEach(key => {
        if (!recordsByAnimal.has(key)) recordsByAnimal.set(key, []);
        recordsByAnimal.get(key).push(record);
      });
    });
  });

  const titledRows = await Promise.all(allRows.map(async animal => {
    const records = recordsByAnimal.get(String(animal.id)) || recordsByAnimal.get(String(animal.animal_number)) || [];
    const titleInfo = await buildProfileTitleName(animal, records);
    return { animal, registeredName: titleInfo.registeredName };
  }));

  body.innerHTML = titledRows.map(({ animal: a, registeredName }) => `
    <tr onclick="openProfileByNumber('${escapeProfileText(a.id || a.animal_number)}')" style="cursor:pointer;">
      <td>${escapeProfileText(registeredName || a.name || "-")}</td>
      <td>${escapeProfileText(a.owner || "-")}</td>
      <td>${escapeProfileText(a.breeder || "-")}</td>
      <td>${escapeProfileText(calculateAgeYear(a.birthyear))}</td>
      <td>${escapeProfileText(a.colour || "-")}</td>
      <td>${escapeProfileText(a.gender || "-")}</td>
    </tr>
  `).join("");
}

function buildSummary(records) {
  const conformationRecords = records.filter(r =>
    String(r.show_type || "").toLowerCase() === "conformation"
  );

  const totalPoints = conformationRecords.reduce((sum, r) => {
    return sum + Number(r.calculated_points ?? r.points ?? 0);
  }, 0);

  const bisCount = conformationRecords.filter(r => {
    const p = String(r.placement || "").toLowerCase();
    return p.includes("best in show") && !p.includes("reserve");
  }).length;

  const bigCount = conformationRecords.filter(r => {
    const p = String(r.placement || "").toLowerCase();
    return p.includes("best in group") && !p.includes("reserve");
  }).length;

  const bobCount = conformationRecords.filter(r => {
    const p = String(r.placement || "").toLowerCase();
    return p.includes("best of breed");
  }).length;

  return `
    <div class="summary-grid">
      <div class="summary-card">
        <strong>${totalPoints}</strong>
        Conformation Points
      </div>

      <div class="summary-card">
        <strong>${bisCount}</strong>
        BIS Wins
      </div>

      <div class="summary-card">
        <strong>${bigCount}</strong>
        Group Wins
      </div>

      <div class="summary-card">
        <strong>${bobCount}</strong>
        Breed Wins
      </div>
    </div>
  `;
}

async function loadShowSummary(animal, records = null) {
  const holder = document.getElementById("showSummary");
  if (!holder) return;

  const resolvedRecords = records || await getShowRecords(animal?.animal_number, animal?.id);
  holder.innerHTML = buildSummary(resolvedRecords);
}

function openShowPopup(animalNumber) {
  window.open(
    "https://showstandard.jcink.net/index.php?act=Pages&pid=31&id=" + encodeURIComponent(animalNumber),
    "ShowRecords",
    "width=1100,height=850,scrollbars=yes,resizable=yes"
  );
}

function openEditPopup(animalNumber) {
  window.open(
    "https://showstandard.jcink.net/index.php?act=Pages&pid=33&id=" +
    encodeURIComponent(animalNumber),
    "ProfileEditor",
    "width=900,height=850,scrollbars=yes,resizable=yes"
  );
}

function openHistoryPopup(animalNumber) {
  window.open(
    "https://showstandard.jcink.net/index.php?act=Pages&pid=34&id=" +
    encodeURIComponent(animalNumber),
    "EditHistory",
    "width=1000,height=850,scrollbars=yes,resizable=yes"
  );
}

function closeShowPopup() {
  document.getElementById("showModal").style.display = "none";
}


async function loadAnimalPublicBreedingListing(animalId) {
  if (!animalId) return null;

  const { data, error } = await getBreedingSupabase()
    .from("natural_breeding_listings")
    .select("*")
    .eq("animal_id", animalId)
    .eq("status", "Open")
    .gt("available_slots", 0)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Public breeding listing lookup error:", error);
    return null;
  }

  return data || null;
}

function publicBreedingPanelHTML(animal, listing) {
  if (!listing || isAnimalRetired(animal)) return "";

  const currentMember = findCurrentMemberName();
  const ownsAnimal = currentUserOwnsAnimal(animal);
  const coOwnsAnimal = currentUserCoOwnsAnimal(animal);
  const canRequest = !!currentMember && !ownsAnimal && !coOwnsAnimal;
  const listedBy = listing.animal_owner_name || animal.owner || "-";

  return `
    <div class="breeding-profile-section">
      <div class="section-title">Breeding Availability</div>
      <div class="box">
      <div style="margin-bottom:12px;">
        <span class="breeding-available-badge">Available for Public Breeding</span>
      </div>

      <div class="public-breeding-grid">
        <div class="public-breeding-card">
          <strong>Listed By</strong>
          ${escapeProfileText(listedBy)}
        </div>

        <div class="public-breeding-card">
          <strong>Breeding Year</strong>
          ${escapeProfileText(listing.breeding_year || "-")}
        </div>

        <div class="public-breeding-card">
          <strong>Breedings Remaining</strong>
          ${escapeProfileText(listing.available_slots ?? "-")}
        </div>

        <div class="public-breeding-card">
          <strong>Breeding Fee</strong>
          $${Number(listing.price || 0).toLocaleString()}
        </div>

        <div class="public-breeding-card">
          <strong>Breeding Restrictions</strong>
          ${listing.same_breed_only ? "Same breed only" : "Crossbreeding allowed"}
        </div>

        <div class="public-breeding-card">
          <strong>Listing Status</strong>
          ${escapeProfileText(listing.status || "Open")}
        </div>

        ${listing.notes ? `
          <div class="public-breeding-card public-breeding-notes">
            <strong>Conditions &amp; Notes</strong>
            ${escapeProfileText(listing.notes)}
          </div>
        ` : ""}
      </div>

      ${canRequest ? `
        <button class="show-button" onclick="requestBreedingFromAnimalProfile('${escapeProfileText(listing.id)}')">
          Request This Breeding
        </button>
        <div id="profileBreedingRequestResult" class="public-breeding-result"></div>
      ` : ownsAnimal ? `
        <div class="ownership-permissions">
          You are the primary owner. Manage this listing and approve requests through the Breeding Centre.
        </div>
      ` : coOwnsAnimal ? `
        <div class="ownership-permissions">
          You are a co-owner and may breed this animal to your own animals automatically. Only the primary owner can manage this public listing or approve outside requests.
        </div>
      ` : `
        <div class="ownership-permissions">
          Log in to request this breeding.
        </div>
      `}
      </div>
    </div>
  `;
}

window.requestBreedingFromAnimalProfile = async function(listingId) {
  const resultBox = document.getElementById("profileBreedingRequestResult");
  const currentMember = findCurrentMemberName();

  if (!currentMember) {
    alert("You must be logged in to request a breeding.");
    return;
  }

  if (resultBox) resultBox.textContent = "Sending request...";

  const breedingClient = getBreedingSupabase();

  const { data: listing, error: listingError } = await breedingClient
    .from("natural_breeding_listings")
    .select("*")
    .eq("id", listingId)
    .eq("status", "Open")
    .gt("available_slots", 0)
    .maybeSingle();

  if (listingError || !listing) {
    console.error("Listing request lookup error:", listingError);
    if (resultBox) resultBox.textContent = "This listing is no longer available.";
    return;
  }

  const normalizedCurrent = normalizeOwnerName(currentMember);
  if (normalizeOwnerName(listing.animal_owner_name || listing.animal_owner_id) === normalizedCurrent) {
    if (resultBox) resultBox.textContent = "You cannot request your own listing.";
    return;
  }

  const { data: existing, error: existingError } = await breedingClient
    .from("natural_breeding_permissions")
    .select("id,status")
    .eq("listing_id", listing.id)
    .eq("recipient_id", currentMember)
    .in("status", ["Pending", "Approved"])
    .limit(1);

  if (existingError) {
    console.error("Existing breeding request check error:", existingError);
  }

  if ((existing || []).length) {
    if (resultBox) {
      resultBox.textContent = existing[0].status === "Approved"
        ? "You already have an approved breeding permission for this listing."
        : "You already have a pending request for this listing.";
    }
    return;
  }

  const { error: insertError } = await breedingClient
    .from("natural_breeding_permissions")
    .insert({
      listing_id: listing.id,
      animal_id: listing.animal_id,
      animal_name: listing.animal_name,
      animal_owner_id: listing.animal_owner_id,
      animal_owner_name: listing.animal_owner_name,
      recipient_id: currentMember,
      recipient_name: currentMember,
      breeding_year: listing.breeding_year,
      price: listing.price || 0,
      conditions: listing.notes || null,
      permission_type: "Public Request",
      status: "Pending"
    });

  if (insertError) {
    console.error("Profile breeding request error:", insertError);
    if (resultBox) resultBox.textContent = "The breeding request could not be sent.";
    return;
  }

  if (resultBox) resultBox.textContent = "Breeding request sent to the primary owner.";
};

function isSafeExternalMediaUrl(value) {
  const clean = String(value || "").trim();
  if (!clean) return false;

  try {
    const url = new URL(clean);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch (error) {
    return false;
  }
}

function animalMediaHTML(animal) {
  const mediaUrl = String(animal?.media_url || "").trim();
  if (!isSafeExternalMediaUrl(mediaUrl)) return "";

  const safeUrl = escapeProfileText(mediaUrl);
  const animalName = escapeProfileText(animal?.name || "Animal");

  return `
    <div class="animal-media">
      <a
        class="animal-media-link"
        href="${safeUrl}"
        target="_blank"
        rel="noopener noreferrer"
        title="Open full-size media"
      >
        <img
          src="${safeUrl}"
          alt="Media for ${animalName}"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="this.closest('.animal-media').style.display='none'"
        >
      </a>
    </div>
  `;
}

async function loadAnimal() {
  const ref = Resolver.getUrlValue();
  const box = document.getElementById("profileBox");

  let data = await Resolver.animal(ref);

  if (!data || !data.animal_number) {
    box.innerHTML = `
      <div class="box">
        Animal not found.<br>
        Make sure the profile URL is using <b>?id=animal UUID</b> or <b>?animal_number=number</b>.
      </div>
    `;
    return;
  }

  data = await autoRetireAnimalIfNeeded(data);

  const animalNumber = data.animal_number;
  const [showRecords, publicBreedingListing] = await Promise.all([
    getShowRecords(animalNumber, data.id),
    loadAnimalPublicBreedingListing(data.id)
  ]);
  const titleInfo = await buildProfileTitleName(data, showRecords);

 const breedIssues = data.breed_issues
  ? `
      <div style="
        margin-top:8px;
        padding:8px;
        background:#f4f7f7;
        border:1px solid #d9e2e2;
        border-radius:6px;
        line-height:1.4;
      ">
        ${
          String(data.breed_issues)
            .split(/\r?\n|•/)
            .map(i => i.trim())
            .filter(Boolean)
            .map(i => `<div style="padding:2px 0;">${escapeProfileText(i)}</div>`)
            .join("")
        }
      </div>
    `
  : "";

  box.innerHTML = `
    <div class="name">
      ${escapeProfileText(titleInfo.registeredName)}
      ${isAnimalRetired(data) ? `<br><span class="retired-badge">Retired</span>` : ""}
    </div>

    ${data.call_name ? '<div class="call-name">' + escapeProfileText(data.call_name) + '</div>' : ""}

    ${animalMediaHTML(data)}

    <div class="stats">
      <div class="stat-item">
        <b>Age:</b>
        ${calculateAgeYear(data.birthyear)}
      </div>

      <div class="stat-item">
        <b>YOB:</b>
        ${escapeProfileText(data.birthyear || "-")}
      </div>

      <div class="stat-item">
        <b>Colour:</b>
        ${escapeProfileText(data.colour || "-")}
      </div>

      <div class="stat-item">
        <b>Gender:</b>
        ${escapeProfileText(data.gender || "-")}
      </div>

      <div class="stat-item">
        <b>Breed:</b>
        ${escapeProfileText(data.breed || "-")}
      </div>

      <div class="stat-item">
        <b>Owner:</b>
        ${escapeProfileText(data.owner || "-")}
      </div>

      <div class="stat-item">
        <b>Co-Owner:</b>
        ${escapeProfileText(data.co_owner || "-")}
      </div>

      <div class="stat-item">
        <b>Breeder:</b>
        ${escapeProfileText(data.breeder || "-")}
      </div>

      ${currentUserHasOwnershipAccess(data) ? `
        <div class="stat-item">
          <b>UUID:</b>
          ${escapeProfileText(data.id || "-")}
        </div>
      ` : ""}
    </div>

    <div class="section-title">
      Bio
    </div>

    <div class="box bio-box">
      ${escapeProfileText(data.bio || "No bio added yet.")}
    </div>

    <div class="section-title">
      Genetics & Health
    </div>

    <div class="box">
      <div class="stat-item">
        <b>Genotype:</b>
        ${escapeProfileText(data.genotype || "-")}
      </div>

      <div class="stat-item">
        <b>Hips:</b>
        ${escapeProfileText(data.health_hips || "-")}
      </div>

      <div class="stat-item">
        <b>Elbows:</b>
        ${escapeProfileText(data.health_elbows || "-")}
      </div>

      <div class="stat-item">
        <b>Eyes:</b>
        ${escapeProfileText(data.health_eyes || "-")}
      </div>

      <div class="stat-item">
        <b>Hearing:</b>
        ${escapeProfileText(data.health_hearing || "-")}
      </div>

      ${breedIssues ? `
        <div class="breed-issues-wrap">
          <div class="stat-item">
            <b>Breed Issues:</b>
            ${breedIssues}
          </div>
        </div>
      ` : ""}
    </div>

    <div class="section-title">
      Pedigree
    </div>

    <div id="pedigreeBox"></div>

    <div class="section-title">
      Offspring
    </div>

    <div class="box">
      <table id="offspringTable" style="width:100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Breeder</th>
            <th>Age/YOB</th>
            <th>Colour</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody><tr><td colspan="6">Loading offspring...</td></tr></tbody>
      </table>
    </div>

    ${publicBreedingPanelHTML(data, publicBreedingListing)}

    <div class="section-title">
      Show Records
    </div>

    <div class="box">
      <div id="showSummary">
        Loading show summary...
      </div>

      <button class="show-button" onclick="openShowPopup('${animalNumber}')">
        View Full Show Records
      </button>

      ${currentUserHasOwnershipAccess(data) ? `
        <button class="show-button" onclick="openEditPopup('${animalNumber}')">
          Edit Profile
        </button>
      ` : ""}

      <button class="show-button" onclick="openHistoryPopup('${animalNumber}')">
        View Edit History
      </button>

      ${currentUserOwnsAnimal(data) && !isAnimalRetired(data) ? `
        <button class="show-button retire-button" onclick="retireCurrentAnimal('${data.id}')">
          Retire Animal
        </button>
      ` : ""}
    </div>
  `;

  loadShowSummary(data, showRecords);

  const pedigreePromise = buildPedigree(data)
    .then(renderPedigree)
    .catch(error => {
      console.error("Pedigree load error:", error);
      const target = document.getElementById("pedigreeBox");
      if (target) target.innerHTML = `<div class="box">Could not load pedigree.</div>`;
    });

  const offspringPromise = loadOffspring(animalNumber, data.id)
    .catch(error => {
      console.error("Offspring load error:", error);
      const body = document.querySelector("#offspringTable tbody");
      if (body) body.innerHTML = `<tr><td colspan="6">Could not load offspring.</td></tr>`;
    });

  await Promise.allSettled([pedigreePromise, offspringPromise]);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.supabaseClient) {
    loadAnimal();
    return;
  }

  let attempts = 0;
  const wait = setInterval(() => {
    attempts++;

    if (window.supabaseClient) {
      clearInterval(wait);
      loadAnimal();
    }

    if (attempts > 50) {
      clearInterval(wait);
      document.getElementById("profileBox").innerHTML = `
        <div class="box">
          Could not connect to the animal database.
        </div>
      `;
    }
  }, 100);
});
</script>
