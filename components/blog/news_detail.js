export function getNewsDetailComponent({
  newsArtistId,
  newsArtistName,
  newsImageCover,
  newsTitle,
  newsFullNews,
  newsImagesSecondaryOne,
  newsImagesSecondaryTwo,
  newsAuthor,
  newsDate,
  newsLocation,
  newsCountry
}) {
    return `
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <img src="./${newsImageCover}" class="card-img-top" alt="${newsTitle}">
                        <div class="card-body p-5">
                            <h2 class="card-title textHeading">${newsTitle}</h2>
                            <h3 class="card-subtitle mb-3"><a class="textLink" href="./artist_detail.html?artistId=${newsArtistId}">${newsArtistName}</a></h3>
                            <p class="card-text">${newsFullNews}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                  <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">Staff</h5>
                              <div class="row mb-3">
                                  <div class="col-12">
                                      <small class="text-muted">Author: ${newsAuthor}</small><br>
                                      <small class="text-muted">Date: ${newsDate}</small><br>
                                      <small class="text-muted">Location: ${newsLocation}, ${newsCountry}</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card mt-2">
                          <div class="card-body">
                              <h5 class="card-title">Secondary Images</h5>
                              <div class="row mb-3">
                                  <div class="col-12">
                                      <img src="./${newsImagesSecondaryOne}" class="img-thumbnail w-100" alt="Secondary Image 1">
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-12">
                                      <img src="./${newsImagesSecondaryTwo}" class="img-thumbnail w-100" alt="Secondary Image 2">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    `;
}
