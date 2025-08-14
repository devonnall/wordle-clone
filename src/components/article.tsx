import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Separator } from "./ui/separator";
import Link from "next/link";

const ArticleTitle = ({
    className,
    children
}: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <h1 className={`text-4xl font-semibold ${className}`}>
            {children}
        </h1>
    )
}

const ArticleSubtitle = ({
    className,
    children
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <p className="mt-4 mb-8">
            {children}
        </p>
    )
}

const ArticleSeparator = ({
    className
}: {
    className?: string
}) => {
    return (
        <Separator className={`${className}`} />
    )
}

type Level = 1 | 2 | 3 | 4 | 5 | 6;

type ArticleHeadingProps = {
  level: Level;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const tags = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" } as const;

const levelClasses: Record<Level, string> = {
  1: "text-4xl font-bold",    // put your H1 styles here
  2: "text-2xl font-semibold mt-8 mb-2",
  3: "text-xl font-semibold mt-4",
  4: "text-lg font-medium mt-4",
  5: "text-md font-medium",
  6: "text-base uppercase tracking-wide",
};

const ArticleHeading = forwardRef<HTMLHeadingElement, ArticleHeadingProps>(
  ({ level, className, children, ...rest }, ref) => {
    const Tag = tags[level];
    const cls = twMerge ? twMerge(levelClasses[level], className) : [levelClasses[level], className].filter(Boolean).join(" ");
    return (
      <Tag ref={ref} className={cls} {...rest}>
        {children}
      </Tag>
    );
  }
);

ArticleHeading.displayName = "ArticleHeading";

const ArticleContentBody = ({
    className,
    children,
}: {
    className?: string,
    children?: React.ReactNode,
}) => {
    return (
        <div className={`space-y-5 ${className}`}>
            {children}
        </div>
    )
}

type ArticleContentProps = {
    className?: string,
    children: React.ReactNode,
}

const ArticleContent = ({
    className,
    children
}: ArticleContentProps) => {
    return (
        <div className={`my-4 ${className}`}>
            {children}
        </div>
    )
}

const ArticleListItem = ({
    className,
    children,
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <li className={`flex mb-1 ${className}`}>
            <span className="mr-4 text-muted-foreground">•</span> 
            <div className="justify-start">{children}</div>
        </li>
    )
}

const ArticleList = ({
    className,
    children,
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <ul className={`mt-4 ${className}`}>
            {children}
        </ul>
    )
}

const ArticleCardTitle = ({
    className,
    children,
}: {
    className?: string,
    children?: React.ReactNode,
}) => {
    return (
        <p className={`text-lg font-semibold text-foreground ${className}`}>
            {children}
        </p>
    )
}

const ArticleCardContent = ({
    className,
    children,
}: {
    className?: string,
    children?: React.ReactNode,
}) => {
    return (
        <p className={`text-muted-foreground text-sm ${className}`}>
            {children}
        </p>
    )
}

const ArticleCard = ({
    className,
    children,
    href,
}: {
    className?: string,
    children?: React.ReactNode,
    href: string
}) => {
    return (
        <Link href={href}>
            <div className={`h-40 p-6 pt-4 space-y-1 rounded-lg border border-border hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 ${className}`}>
                {children}
            </div>
        </Link>
    )
}

const Article = ({
    className,
    children,
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <article className={`${className}`}>
            {children}
        </article>
    )
}

export {
    Article,
    ArticleTitle,
    ArticleSubtitle,
    ArticleHeading,
    ArticleContent,
    ArticleSeparator,
    ArticleList,
    ArticleListItem,
    ArticleCard,
    ArticleCardTitle,
    ArticleCardContent,
    ArticleContentBody
}