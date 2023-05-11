import React, { forwardRef } from "react";
import { ISvgProps } from "./Icon.type";

export const Css = forwardRef<SVGSVGElement, ISvgProps>(function Css(
  { className, ...props },
  ref
) {
  return (
    <svg
      className={className}
      {...props}
      ref={ref}
      viewBox="0 0 342 480"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="#000000ff">
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 68.37 0.96 C 89.37 0.70 110.37 0.88 131.37 0.87 C 131.42 7.44 131.52 14.01 131.28 20.58 C 116.73 20.48 102.19 20.58 87.65 20.67 C 87.55 30.21 87.36 39.75 87.45 49.29 C 102.05 49.38 116.66 49.52 131.26 49.46 C 131.43 54.86 131.37 60.28 131.21 65.69 C 110.27 65.55 89.33 65.61 68.39 65.63 C 68.44 44.07 68.48 22.52 68.37 0.96 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 138.86 0.89 C 160.12 0.85 181.38 0.72 202.65 0.96 C 202.57 7.17 202.63 13.37 202.63 19.58 C 187.16 19.53 171.68 19.60 156.21 19.78 C 156.23 22.22 156.23 24.66 156.21 27.10 C 171.66 27.35 187.10 27.38 202.54 27.47 C 202.60 40.20 202.57 52.92 202.65 65.64 C 181.38 65.60 160.11 65.62 138.84 65.72 C 138.73 60.58 138.72 55.45 138.87 50.31 C 153.61 50.35 168.36 50.37 183.10 50.25 C 183.19 46.94 183.23 43.62 183.22 40.31 C 168.41 40.31 153.59 40.36 138.78 40.26 C 138.78 27.14 138.78 14.01 138.86 0.89 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 209.77 1.00 C 230.99 1.00 252.22 1.00 273.44 1.00 C 273.53 7.24 273.62 13.48 273.42 19.71 C 257.88 19.70 242.34 19.79 226.80 19.82 C 226.84 22.37 226.90 24.92 227.03 27.47 C 242.48 27.40 257.93 27.59 273.37 27.75 C 273.51 40.42 273.61 53.09 273.43 65.76 C 252.16 65.70 230.89 65.70 209.62 65.80 C 209.49 60.68 209.45 55.54 209.67 50.42 C 224.38 50.53 239.10 50.51 253.82 50.37 C 253.86 47.05 253.93 43.73 253.90 40.42 C 239.13 40.56 224.35 40.48 209.57 40.43 C 209.57 27.29 209.67 14.14 209.77 1.00 Z"
        />
      </g>
      <g id="#0170baff">
        <path
          fill="#0170ba"
          opacity="1.00"
          d=" M 0.00 92.46 C 113.92 92.45 227.83 92.44 341.75 92.46 C 335.48 163.31 329.31 234.16 322.78 304.99 C 318.90 350.26 314.90 395.53 310.68 440.77 C 286.37 447.21 262.30 454.55 238.00 461.02 C 215.68 467.57 193.18 473.50 170.85 480.00 L 170.19 480.00 C 148.94 473.68 127.48 468.12 106.23 461.80 C 81.15 455.04 56.29 447.50 31.20 440.77 C 27.93 406.86 24.98 372.93 22.07 339.00 C 16.58 276.31 10.61 213.66 5.33 150.96 C 3.50 132.09 2.19 113.16 0.00 94.33 L 0.00 92.46 M 171.41 120.41 C 171.17 134.02 171.59 147.64 171.17 161.24 C 132.09 161.10 93.00 161.21 53.92 161.25 C 54.59 174.46 56.36 187.58 58.18 200.68 C 94.54 202.03 130.95 200.63 167.31 201.72 C 135.50 215.99 103.30 229.43 71.35 243.40 C 68.61 244.62 65.68 245.54 63.23 247.32 C 63.50 261.83 65.84 276.26 66.87 290.74 C 86.25 290.67 105.62 290.36 125.00 290.33 C 140.53 290.25 156.07 290.56 171.60 290.22 C 170.86 314.08 171.83 337.97 171.10 361.83 C 160.65 360.28 150.33 357.95 139.92 356.10 C 131.71 354.31 123.30 353.38 115.21 351.03 C 114.06 339.58 113.26 328.09 112.24 316.63 C 109.90 315.91 107.42 315.98 105.00 315.94 C 93.26 316.01 81.51 315.90 69.76 316.08 C 70.91 338.11 72.89 360.11 76.26 381.93 C 87.84 384.95 99.44 387.91 111.00 391.06 C 128.71 395.88 146.64 399.89 164.38 404.63 C 166.49 405.08 168.62 405.86 170.81 405.68 C 171.99 420.17 171.08 434.75 171.30 449.28 C 175.39 448.62 179.41 447.61 183.36 446.39 C 216.94 437.27 250.48 427.98 284.04 418.77 C 285.71 405.57 286.49 392.28 287.81 379.05 C 291.30 338.83 294.82 298.61 298.48 258.40 C 302.77 212.40 306.48 166.35 310.80 120.35 C 264.33 120.39 217.87 120.26 171.41 120.41 Z"
        />
      </g>
      <g id="#29a9dfff">
        <path
          fill="#29a9df"
          opacity="1.00"
          d=" M 171.41 120.41 C 217.87 120.26 264.33 120.39 310.80 120.35 C 306.48 166.35 302.77 212.40 298.48 258.40 C 294.82 298.61 291.30 338.83 287.81 379.05 C 286.49 392.28 285.71 405.57 284.04 418.77 C 250.48 427.98 216.94 437.27 183.36 446.39 C 179.41 447.61 175.39 448.62 171.30 449.28 C 171.08 434.75 171.99 420.17 170.81 405.68 C 171.11 405.62 171.72 405.50 172.02 405.44 C 203.25 397.60 234.27 388.97 265.43 380.85 C 269.37 336.65 273.74 292.47 276.51 248.18 C 250.01 248.32 223.50 248.24 197.00 248.35 C 193.14 248.37 189.28 248.35 185.44 248.07 C 199.70 240.73 214.70 234.91 229.34 228.36 C 243.39 221.99 257.61 216.02 271.71 209.77 C 274.43 208.52 277.33 207.48 279.72 205.62 C 280.66 202.17 280.61 198.56 280.98 195.03 C 281.79 183.83 283.23 172.69 283.77 161.48 C 246.24 161.18 208.71 161.44 171.17 161.24 C 171.59 147.64 171.17 134.02 171.41 120.41 Z"
        />
        <path
          fill="#29a9df"
          opacity="1.00"
          d=" M 171.60 290.22 C 189.72 289.91 207.85 290.40 225.98 290.28 C 224.97 308.81 223.43 327.31 222.47 345.84 C 211.36 349.47 200.08 352.54 188.88 355.90 C 182.91 357.72 176.78 359.16 171.10 361.83 C 171.83 337.97 170.86 314.08 171.60 290.22 Z"
        />
      </g>
      <g id="#cfcfcfff">
        <path
          fill="#cfcfcf"
          opacity="1.00"
          d=" M 53.92 161.25 C 93.00 161.21 132.09 161.10 171.17 161.24 C 171.68 204.24 171.04 247.24 171.60 290.22 C 156.07 290.56 140.53 290.25 125.00 290.33 C 105.62 290.36 86.25 290.67 66.87 290.74 C 65.84 276.26 63.50 261.83 63.23 247.32 C 65.68 245.54 68.61 244.62 71.35 243.40 C 103.30 229.43 135.50 215.99 167.31 201.72 C 130.95 200.63 94.54 202.03 58.18 200.68 C 56.36 187.58 54.59 174.46 53.92 161.25 Z"
        />
        <path
          fill="#cfcfcf"
          opacity="1.00"
          d=" M 69.76 316.08 C 81.51 315.90 93.26 316.01 105.00 315.94 C 107.42 315.98 109.90 315.91 112.24 316.63 C 113.26 328.09 114.06 339.58 115.21 351.03 C 123.30 353.38 131.71 354.31 139.92 356.10 C 150.33 357.95 160.65 360.28 171.10 361.83 C 172.10 376.35 170.35 390.97 172.02 405.44 C 171.72 405.50 171.11 405.62 170.81 405.68 C 168.62 405.86 166.49 405.08 164.38 404.63 C 146.64 399.89 128.71 395.88 111.00 391.06 C 99.44 387.91 87.84 384.95 76.26 381.93 C 72.89 360.11 70.91 338.11 69.76 316.08 Z"
        />
      </g>
      <g id="#ffffffff">
        <path
          fill="#ffffff"
          opacity="1.00"
          d=" M 171.17 161.24 C 208.71 161.44 246.24 161.18 283.77 161.48 C 283.23 172.69 281.79 183.83 280.98 195.03 C 280.61 198.56 280.66 202.17 279.72 205.62 C 277.33 207.48 274.43 208.52 271.71 209.77 C 257.61 216.02 243.39 221.99 229.34 228.36 C 214.70 234.91 199.70 240.73 185.44 248.07 C 189.28 248.35 193.14 248.37 197.00 248.35 C 223.50 248.24 250.01 248.32 276.51 248.18 C 273.74 292.47 269.37 336.65 265.43 380.85 C 234.27 388.97 203.25 397.60 172.02 405.44 C 170.35 390.97 172.10 376.35 171.10 361.83 C 176.78 359.16 182.91 357.72 188.88 355.90 C 200.08 352.54 211.36 349.47 222.47 345.84 C 223.43 327.31 224.97 308.81 225.98 290.28 C 207.85 290.40 189.72 289.91 171.60 290.22 C 171.04 247.24 171.68 204.24 171.17 161.24 Z"
        />
      </g>
    </svg>
  );
});
