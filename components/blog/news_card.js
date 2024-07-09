export function getNewsCardComponent({
  id,
  image, 
  date,
  location,
  title,
  extract
}) {
  // Determina la longitud máxima del extracto antes de truncar
  const maxLength = 58;

  // Trunca el extracto si es mayor que la longitud máxima
  const truncatedExtract = extract.length > maxLength ? `${extract.slice(0, maxLength)}...` : extract;

  return `
      <div class="col">
        <a href="./news_detail.html?newsId=${id}">
          <div class="card h-100 card-link">
              <div style="height: 200px; overflow: hidden;" >
                <img src="./${image}" class="card-img-top h-100" style="object-fit: cover; object-position: top;" alt="...">
              </div>
              <div class="card-body">
                  <h6 class="text-muted"><small>${date} - ${location}</small></h6>
                  
                  <h5 class="card-title textHeading">${title}</h5>
                  <p class="card-text">${truncatedExtract}</p>
              </div>
              <div class="card-footer">
              Tap to read more...
              </div>
          </div>
        </a>
      </div>
  `;
}
