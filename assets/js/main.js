const sliderContainer = document.querySelector('.slider-container')
const sliderDots = document.querySelector('.slider-dots')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
let activeIndex = 0

const slides = [
	{
		src: 'https://img2.thuthuatphanmem.vn/uploads/2018/12/30/anh-background-cuc-dep_110341116.jpg',
		alt: '',
	},
	{
		src: 'https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg',
		alt: '',
	},
	{
		src: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/tai-background-dep-nhat.jpg',
		alt: '',
	},
	{
		src: 'https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1024x682.jpg',
		alt: '',
	},
	{
		src: 'https://img4.thuthuatphanmem.vn/uploads/2020/07/05/hinh-anh-backgroud-hoa-dao-no-cuc-ky-dep_034909613.png',
		alt: '',
	},
	{
		src: 'https://sackim.com/wp-content/uploads/2020/01/1.jpg',
		alt: '',
	},
]

function renderTemplate() {
	sliderContainer.innerHTML = ''
	sliderDots.innerHTML = ''

	for (let i = 0; i < slides.length; i++) {
		sliderContainer.innerHTML += `<div class="slider-item ${
			activeIndex === i ? 'slider-item--active' : ''
		}">
            <img src="${slides[i].src}" alt="${slides[i].alt}" />
        </div>`

		sliderDots.innerHTML += `<div class="slider-dots-item ${
			activeIndex === i ? 'slider-dots-item--active' : ''
		}"></div>`
	}

	const dotItems = document.querySelectorAll('.slider-dots-item')
	dotItems.forEach((dot, index) =>
		dot.addEventListener('click', () => {
			activeIndex = index
			renderTemplate()
		})
	)
}

renderTemplate()

nextBtn.addEventListener('click', () => {
	++activeIndex

	if (activeIndex > slides.length - 1) {
		activeIndex = 0
	}

	renderTemplate()
})

prevBtn.addEventListener('click', () => {
	--activeIndex

	if (activeIndex < 0) {
		activeIndex = slides.length - 1
	}

	renderTemplate()
})
