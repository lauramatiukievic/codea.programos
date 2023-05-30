export default function titleWrapper(title) {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("col-12");
  const programsTitle = document.createElement("h1");
  programsTitle.textContent = title;

  const firstBanner = document.createElement("div");
  firstBanner.classList.add("banner", "col-12");

  const insideBanner = document.createElement("p");
  insideBanner.classList.add("text");
  insideBanner.innerHTML = `"Nežinai ką pasirinkti? "
  <span class='text-1'> Spręsk IT testą</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="80">
              <path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fill-rule="evenodd"></path>
            </svg>`;
  const secondBanner = document.createElement("div");
  secondBanner.classList.add("banner", "col-12");

  const secondBannerPhoto = document.createElement("img");
  secondBannerPhoto.src = "img/Desktop_banner-1024x70.jpg";

  secondBanner.append(secondBannerPhoto);
  firstBanner.append(insideBanner);
  titleWrapper.append(programsTitle, firstBanner, secondBanner);

  return titleWrapper;
}
