// Ads are identified by the text "promoted" in the span element
function removePromotedPosts() {
    const allSpans = document.querySelectorAll('span');
    let removed = 0;

    Array.from(allSpans).forEach(span => {
        if (span.textContent === 'promoted') {
            const ancestorDiv = span.closest('[data-testid="post-container"]');
            if (ancestorDiv) {
                ancestorDiv.remove();
                removed++;
            }
        }
    });

    if (removed) {
        console.log(`Promoted posts removed! 🎉 (${removed})`);
    }
}

// Remove promoted posts on initial page load
removePromotedPosts();

const observer = new MutationObserver(() => {
    removePromotedPosts();
});

const targetNode = document.body;
const observerOptions = {
    childList: true,
    subtree: true,
};

observer.observe(targetNode, observerOptions);