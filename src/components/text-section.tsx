import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type TextSectionProps = {
  side?: string;
  children?: React.ReactNode;
};

const TextSection = React.forwardRef<
  HTMLDivElement,
  TextSectionProps & React.HTMLAttributes<HTMLDivElement>
>(({ side = "left", children, className, ...props }, ref) => {
  // Find specific components
  const childrenArray = React.Children.toArray(children);
  const SectionImageComponent = childrenArray.find(
    (child: React.ReactNode) =>
      React.isValidElement(child) && child.type === TextSectionImage,
  );
  const TextSectionContentComponent = childrenArray.find(
    (child: React.ReactNode) =>
      React.isValidElement(child) && child.type === TextSectionContent,
  );

  return (
    <section
      className={
        "w-full bg-yoi-white py-12 dark:bg-yoi-black md:py-24 lg:py-24"
      }
      ref={ref}
      {...props}
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          {side === "right" ? (
            <>
              {TextSectionContentComponent}
              {SectionImageComponent}
            </>
          ) : (
            <>
              {SectionImageComponent}
              {TextSectionContentComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
});
TextSection.displayName = "TextSection";

const TextSectionToast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-block w-fit rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800",
        className,
      )}
      {...props}
    />
  );
});
TextSectionToast.displayName = "TextSectionToast";

const TextSectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col justify-center space-y-4", className)}
      {...props}
    />
  );
});
TextSectionContent.displayName = "TextSectionContent";

const TextSectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "text-3xl font-bold tracking-tighter sm:text-5xl",
        className,
      )}
      {...props}
    />
  );
});
TextSectionTitle.displayName = "TextSectionTitle";

const TextSectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
        className,
      )}
      {...props}
    />
  );
});
TextSectionDescription.displayName = "TextSectionDescription";

const TextSectionButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & { href: string }
>(({ className, href = "#", children = "Learn More", ...props }, ref) => {
  const safeHref = href ?? "#";

  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <Link href={safeHref}>
        <button
          ref={ref}
          className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
            className,
          )}
          {...props}
        >
          {children ?? "Learn More"}
        </button>
      </Link>
    </div>
  );
});
TextSectionButton.displayName = "TextSectionButton";

const TextSectionImage = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
  }
>(({ className, src, alt, ...props }, ref) => {
  // Check image source
  const checkedSrc = src ?? "/heroes/wexor-tmg-L-2p8fapOA8-unsplash.jpg";

  return (
    <Image
      ref={ref}
      className={cn(
        "mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last",
        className,
      )}
      width="550"
      height="310"
      src={checkedSrc}
      alt={alt}
      {...props}
    />
  );
});
TextSectionImage.displayName = "SectionImage";

export {
  TextSection,
  TextSectionContent,
  TextSectionToast,
  TextSectionTitle,
  TextSectionDescription,
  TextSectionButton,
  TextSectionImage,
};