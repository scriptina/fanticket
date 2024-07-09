export function hero() {
    return `
        <div class="w-100 bg-hero position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
            <div class="position-absolute top-0 end-0 py-3 px-4 gap-3 d-flex" style="opacity: 0.4; color: #fff;">
                <span class="small">FanTicket</span>
                <i class="fas fa-ticket-alt"></i>
            </div>
            <svg class="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"></use></svg>
            <h1 class="text-light">Get your tickets!</h1>
            <p class="col-lg-6 mx-auto mb-4"></p>
        </div>
    `;
}
