export function getArtistDetailComponent({
  artistName,
  artistImageCover,
  artistGenre,
  artistCity,
  artistActiveYears,
  artistHitSongs,
  artistImagesSecondaryOne,
  artistImagesSecondaryTwo
}) {
    return `
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <img src="./${artistImageCover}" class="card-img-top" alt="${artistName}">
                        <div class="card-body p-5">
                            <h2 class="card-title textHeading">${artistName}</h2>
                            <p class="card-text">Genre: ${artistGenre}</p>
                            <p class="card-text">City: ${artistCity}</p>
                            <p class="card-text">Years active: ${artistActiveYears}</p>
                            <p class="card-text">Hit Songs: ${artistHitSongs}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Secondary Images</h5>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <img src="./${artistImagesSecondaryOne}" class="img-thumbnail w-100" alt="Secondary Image 1">
                                </div>
                                <div class="col-6">
                                    <img src="./${artistImagesSecondaryTwo}" class="img-thumbnail w-100" alt="Secondary Image 2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
