import { FC, SVGProps } from 'react'

export const IconAvatar: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16 1.4375C14.9952 1.4375 13.9766 1.67063 12.9889 2.0775C12.856 2.48531 12.7466 3 12.6841 3.56212C12.6022 4.299 12.5759 5.10625 12.5672 5.86331C14.6837 5.63181 17.3163 5.63181 19.4328 5.86331C19.4241 5.10625 19.3978 4.29894 19.3159 3.56206C19.2534 3.00006 19.1441 2.48531 19.0111 2.0775C18.0234 1.67063 17.0048 1.4375 16 1.4375ZM22.2852 2.64575C22.8674 3.08663 23.4169 3.57563 23.9279 4.09788C24.0235 3.68225 24.221 3.30437 24.4923 2.99194L22.2852 2.64575ZM11.6584 2.73887C9.49119 4.00262 7.59294 6.0335 6.49888 8.13475C4.43138 12.1058 4.01825 17.9445 6.46575 21.5597C8.29913 24.2674 12.5173 25.3125 16 25.3125C19.4828 25.3125 23.7009 24.2675 25.5342 21.5597C27.9818 17.9445 27.5686 12.1057 25.5011 8.13469C24.4071 6.03344 22.5088 4.00269 20.3417 2.73887C20.3778 2.967 20.4078 3.20063 20.4341 3.43788C20.5292 4.29375 20.5536 5.20019 20.5599 6.01706C21.729 6.21419 22.625 6.5 23 6.875C25 8.875 27.7211 15.2934 24 20.875C21.6466 24.405 10.3534 24.405 8 20.875C4.27894 15.2934 7 8.875 9 6.875C9.375 6.5 10.2709 6.21419 11.44 6.01706C11.4464 5.20019 11.4708 4.29375 11.5659 3.43788C11.5922 3.20063 11.6222 2.967 11.6584 2.73887ZM4 3C3.44769 3 3 3.44769 3 4C3.00002 4.16302 3.03989 4.32356 3.11614 4.46765C3.1924 4.61173 3.30272 4.73499 3.4375 4.82669V9.09375L4.5625 8.25V4.82562C4.69713 4.73403 4.80736 4.61094 4.88361 4.46705C4.95986 4.32317 4.99981 4.16284 5 4C5 3.44769 4.55231 3 4 3ZM26.4256 3.23C25.625 3.23 24.9881 3.86687 24.9881 4.6675C24.9881 5.46813 25.625 6.105 26.4256 6.105C27.2262 6.105 27.8631 5.46813 27.8631 4.6675C27.8631 3.86687 27.2262 3.23 26.4256 3.23ZM28.0051 6.68031C27.5689 7.02388 27.0203 7.23 26.4258 7.23C26.3792 7.23 26.3332 7.22831 26.2874 7.22581C26.338 7.31628 26.3876 7.40733 26.4361 7.49894L28.3019 8.89831L28.0051 6.68031ZM13.0787 6.83656C12.0002 6.84219 10.7502 7.07137 9.75169 7.84406C8.08706 9.13206 7.06206 15.0168 7.65856 17.0168C8.69506 13.1563 9.65812 9.2655 14.4036 6.93713C13.9653 6.86841 13.5223 6.83482 13.0787 6.83656ZM4.63781 9.59969L2.50938 11.1961L1.60438 15.7216L3.99062 18.585C3.30644 15.6773 3.62963 12.4148 4.63781 9.59969ZM27.3622 9.59969C28.3703 12.4148 28.6936 15.6773 28.0094 18.5849L30.3956 15.7215L29.4906 11.196L27.3622 9.59969ZM6.66531 23.4956C6.44137 23.5687 6.21206 23.7085 6.02269 23.8978C5.76419 24.1563 5.60519 24.4872 5.57494 24.7793C5.58806 24.8021 5.61263 24.8516 5.68306 24.9144C5.83638 25.0512 6.10137 25.2376 6.441 25.4368C7.12019 25.8356 8.10038 26.2966 9.20381 26.7257C10.5274 27.2406 12.0382 27.7073 13.4374 27.9995V26.2739C10.9706 25.9539 8.44394 25.1286 6.66531 23.4956ZM25.3347 23.4956C23.5561 25.1284 21.0294 25.9538 18.5625 26.2738V27.9994C19.9617 27.7071 21.4725 27.2404 22.7961 26.7256C23.8996 26.2966 24.8797 25.8354 25.5589 25.4368C25.8986 25.2374 26.1636 25.0511 26.3169 24.9142C26.3873 24.8515 26.4119 24.8019 26.425 24.7792C26.3949 24.4871 26.2358 24.1561 25.9773 23.8977C25.7879 23.7083 25.5586 23.5687 25.3347 23.4955V23.4956ZM4.83262 25.6626L1.125 28.1344V30.875H3.4375V29.75H4.5625V30.875H27.4375V29.75H28.5625V30.875H30.875V28.1344L27.1674 25.6626C27.1338 25.6931 27.0999 25.7232 27.0659 25.7537C26.8208 25.9722 26.5077 26.1843 26.1286 26.4069C25.3703 26.8519 24.3504 27.3284 23.2039 27.7743C20.9107 28.666 18.1406 29.4375 16 29.4375C13.8594 29.4375 11.0893 28.6661 8.79613 27.7744C7.64956 27.3284 6.62975 26.8521 5.87144 26.407C5.49231 26.1845 5.17919 25.9723 4.93406 25.7537C4.90012 25.7232 4.86619 25.6931 4.83262 25.6626ZM14.5625 26.3865V28.1985C15.0773 28.2711 15.5633 28.3125 16 28.3125C16.4367 28.3125 16.9227 28.2711 17.4375 28.1985V26.3865C16.4804 26.4544 15.5196 26.4544 14.5625 26.3865Z"
				fill="white"
			/>
		</svg>
	)
}