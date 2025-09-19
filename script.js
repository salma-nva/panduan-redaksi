// Data kalimat rekomendasi
const dataKalimat = [
    { jenis: "Keberatan Biaya", keyword: "biaya, tarif", kalimat: "Pemohon keberatan dengan biaya yang dikenakan karena tidak sesuai dengan peraturan yang berlaku." },
    { jenis: "Keberatan Biaya", keyword: "biaya, wajar", kalimat: "Berdasarkan hasil pemeriksaan, pemohon menganggap besaran biaya tidak wajar." },
    { jenis: "Keberatan Dokumen", keyword: "dokumen, berkas", kalimat: "Pemohon keberatan karena dokumen yang diserahkan kurang lengkap." },
    { jenis: "Keberatan Dokumen", keyword: "dokumen, salinan", kalimat: "Pemohon tidak melampirkan salinan KTP sehingga permohonan tidak dapat diproses." }
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function displayResults(results) {
    resultsDiv.innerHTML = '';
    if (results.length > 0) {
        results.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.textContent = item.kalimat;
            resultsDiv.appendChild(div);
        });
    } else {
        resultsDiv.innerHTML = '<div>Tidak ditemukan.</div>';
    }
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === '') {
        resultsDiv.innerHTML = '';
        return;
    }
    
    const filteredResults = dataKalimat.filter(item => {
        return item.keyword.toLowerCase().includes(searchTerm);
    });

    displayResults(filteredResults);
});