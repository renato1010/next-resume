import { SVGProps } from "react";

type ApigeeProps = {
  width?: string;
  height?: string;
  fill?: string;
} & SVGSVGElement;
const Apigee = ({ width = '16', height = '16', fill = '#4285f4',...rest }: SVGProps<ApigeeProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={`${width}px`}
    height={`${height}px`}
    {...rest}
  >
    <defs>
      <style>{".cls-1{fill:#669df6;fill-rule:evenodd}"}</style>
    </defs>
    <title>{"Icon_24px_AppigeeAPIPlatform_Color"}</title>
    <g id="Product_Icons" data-name="Product Icons">
      <g id="Group-2">
        <g id="Group-8">
          <path
            id="Fill-1"
            className="cls-1"
            d="m5.2 12 1.32-1.32-1.79-1.79a2.94 2.94 0 0 1 2.08-5 2.92 2.92 0 0 1 2.07.86l1.8 1.79L12 5.2l-1.79-1.79a4.81 4.81 0 1 0-6.8 6.8Z"
          />
          <path
            id="Fill-3"
            className="cls-1"
            d="m18.8 12-1.32 1.32 1.79 1.8a2.94 2.94 0 0 1-4.16 4.15l-1.79-1.79L12 18.8l1.79 1.79a4.81 4.81 0 1 0 6.8-6.8Z"
          />
          <g id="Group-7">
            <path
              id="Fill-5"
              d="M8.89 19.27a2.94 2.94 0 0 1-4.16-4.16l1.79-1.79 4.16 4.16Zm6.23-14.54a2.93 2.93 0 0 1 5 2.08 3 3 0 0 1-.86 2.08l-1.79 1.79-4.15-4.16ZM12 15.19A3.2 3.2 0 0 1 8.81 12 3.21 3.21 0 0 1 12 8.81 3.21 3.21 0 0 1 15.19 12 3.2 3.2 0 0 1 12 15.19ZM18.8 12l1.79-1.79a4.81 4.81 0 1 0-6.8-6.8L12 5.2 5.2 12l-1.79 1.79a4.81 4.81 0 1 0 6.8 6.8L12 18.8Z"
              style={{
                fill:fill,
                fillRule: "evenodd",
              }}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export { Apigee };
