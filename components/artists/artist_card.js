export function getArtistCardComponent({
    artistId,
    artistName,
    artistImageCover,
    artistGenre,
    artistActiveYears,
    artistCity,
}) {
    return `
        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-10">
            <a href="./artist_detail.html?artistId=${artistId}" class="text-decoration-none d-block">
                <div class="card h-100 card-link ">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div style="height: 200px; overflow: hidden; position: relative;">
                                    <img src="${artistImageCover}" class="img-fluid rounded-start w-100 h-100" style="object-fit: cover; position: absolute; top: 0; bottom: 0; left: 0; right: 0;" alt="${artistName}" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body d-flex flex-column h-100">
                                    <h5 class="card-title textHeading">${artistName}</h5>
                                    <p class="card-text">${artistGenre}</p>
                                    <p class="card-text m-0">${artistActiveYears}</p>
                                    <div class="mt-auto">
                                        <small class="text-muted">${artistCity}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}
