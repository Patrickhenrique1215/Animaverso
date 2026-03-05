function scrollList(container, direction) {
  if (!container) return;
  const scrollAmount = window.innerWidth * 0.65; // 65% da viewport
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

export default scrollList;
