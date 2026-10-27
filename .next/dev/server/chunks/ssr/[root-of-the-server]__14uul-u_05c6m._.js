module.exports = [
(()=>{"use strict";return[
"[project]/src/app/chapters/[chapterId]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChapterPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-rsc] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constitution$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constitution.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chapter$2f$ArticleAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chapter/ArticleAccordion.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function findChapter(identifier) {
    const normalized = identifier.toLowerCase().trim().replace(/^chapter-/, "");
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constitution$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].chapters.find((ch)=>{
        return ch.number.toString() === normalized || ch.slug.toLowerCase() === normalized || `chapter-${ch.number}` === normalized;
    });
}
async function generateStaticParams() {
    const params = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constitution$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].chapters.forEach((ch)=>{
        params.push({
            chapterId: ch.number.toString()
        });
        params.push({
            chapterId: ch.slug
        });
    });
    return params;
}
async function generateMetadata({ params }) {
    const resolvedParams = await Promise.resolve(params);
    const chapter = findChapter(resolvedParams.chapterId);
    if (!chapter) {
        return {
            title: "Chapter Not Found - Soma Katiba KE"
        };
    }
    return {
        title: `Chapter ${chapter.number}: ${chapter.title} - Soma Katiba KE`,
        description: chapter.summary
    };
}
async function ChapterPage({ params }) {
    const resolvedParams = await Promise.resolve(params);
    const chapter = findChapter(resolvedParams.chapterId);
    if (!chapter) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const allChapters = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constitution$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].chapters;
    const currentIndex = allChapters.findIndex((c)=>c.number === chapter.number);
    const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white text-katiba-black flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 flex w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-katiba-black"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 bg-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-katiba-red"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 bg-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-katiba-green"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-katiba-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#chapters",
                            className: "inline-flex items-center gap-2 text-sm font-black text-katiba-black hover:text-katiba-green transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-katiba-gray-100 flex items-center justify-center text-katiba-black group-hover:bg-katiba-green",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back to Legal Repository"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-katiba-gray-600 uppercase",
                                    children: "Constitution of Kenya (2010)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-black text-katiba-green bg-katiba-green-light px-2.5 py-1 rounded",
                                    children: [
                                        "Chapter ",
                                        chapter.number,
                                        " of 18"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://www.instagram.com/somakatibake",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-xs font-bold px-3.5 py-1.5 rounded-lg bg-katiba-green text-white hover:bg-katiba-green-dark transition",
                            children: "Follow @somakatibake"
                        }, void 0, false, {
                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-katiba-gray-50 rounded-3xl p-6 sm:p-10 border border-katiba-gray-200 shadow-sm relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-katiba-green-light/40 rounded-full blur-2xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 text-xs font-black uppercase tracking-wider bg-katiba-green text-white rounded-md",
                                        children: [
                                            "Chapter ",
                                            chapter.number
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white border border-katiba-gray-200 text-katiba-gray-800 rounded-md",
                                        children: chapter.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white border border-katiba-gray-200 text-katiba-gray-800 rounded-md",
                                        children: chapter.articleRange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-5xl font-black text-katiba-black tracking-tight leading-tight",
                                children: chapter.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            chapter.swahiliTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base font-bold text-katiba-green mt-1",
                                children: [
                                    "Kiswahili: ",
                                    chapter.swahiliTitle
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-1 bg-katiba-red my-6 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-katiba-gray-200 text-base text-katiba-gray-800 leading-relaxed font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-black uppercase tracking-wider text-katiba-gray-600 mb-1",
                                        children: "Chapter Overview:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: chapter.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            chapter.keyProvisions && chapter.keyProvisions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-black uppercase tracking-wider text-katiba-black mb-3",
                                        children: "Key Constitutional Takeaways:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: chapter.keyProvisions.map((provision, pIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl bg-white border border-katiba-gray-200 text-xs text-katiba-gray-800 font-medium flex items-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-4 h-4 text-katiba-green flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: provision
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, pIdx, true, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-3 border-b border-katiba-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-black text-katiba-black tracking-tight",
                                                children: [
                                                    "Articles in Chapter ",
                                                    chapter.number
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-katiba-gray-600 mt-0.5",
                                                children: "Click any article header to review full legal clauses and plain language breakdowns."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black px-2.5 py-1 rounded bg-katiba-gray-100 text-katiba-gray-800 uppercase",
                                        children: [
                                            chapter.articles.length,
                                            " ",
                                            chapter.articles.length === 1 ? "Article" : "Articles"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chapter$2f$ArticleAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                articles: chapter.articles,
                                chapterNumber: chapter.number
                            }, void 0, false, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "pt-8 border-t border-katiba-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4",
                        "aria-label": "Chapter Navigation",
                        children: [
                            prevChapter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/chapters/${prevChapter.number}`,
                                className: "p-4 rounded-2xl border border-katiba-gray-200 bg-white hover:border-katiba-green hover:shadow-sm transition group flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-katiba-gray-100 flex items-center justify-center group-hover:bg-katiba-green group-hover:text-white transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold uppercase tracking-wider text-katiba-gray-600 block",
                                                children: "Previous Chapter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-black text-katiba-black group-hover:text-katiba-green transition",
                                                children: [
                                                    "Chapter ",
                                                    prevChapter.number,
                                                    ": ",
                                                    prevChapter.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            nextChapter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/chapters/${nextChapter.number}`,
                                className: "p-4 rounded-2xl border border-katiba-gray-200 bg-white hover:border-katiba-green hover:shadow-sm transition group flex items-center justify-between text-right sm:col-start-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 mr-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold uppercase tracking-wider text-katiba-gray-600 block",
                                                children: "Next Chapter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-black text-katiba-black group-hover:text-katiba-green transition",
                                                children: [
                                                    "Chapter ",
                                                    nextChapter.number,
                                                    ": ",
                                                    nextChapter.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-katiba-gray-100 flex items-center justify-center group-hover:bg-katiba-green group-hover:text-white transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-katiba-black text-katiba-gray-200 py-12 border-t border-katiba-gray-800 mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 rounded-2xl bg-katiba-gray-800/80 border border-katiba-gray-700/60 max-w-3xl mx-auto text-center space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-katiba-red text-white rounded-full",
                                    children: "Non-Partisan Educational Mission"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-katiba-gray-200 leading-relaxed",
                                    children: "Important Disclaimer and Non-Partisan Pledge. The SOMA KATIBA KE initiative, its social media platforms, and organization are purely for educational purposes. We are not affiliated with any political person, political party, or movement whatsoever. We serve only knowledge."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-katiba-gray-400",
                                    children: "Project by ctrlHUB."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-between text-xs text-katiba-gray-400 pt-6 border-t border-katiba-gray-800 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Soma Katiba KE. Promoting Constitutional Literacy across all 47 Counties of Kenya."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-white transition font-bold",
                                    children: "Return to Landing Page"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/chapters/[chapterId]/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/chapter/ArticleAccordion.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/chapter/ArticleAccordion.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/chapter/ArticleAccordion.tsx", "default");
}),
"[project]/src/components/chapter/ArticleAccordion.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chapter$2f$ArticleAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/chapter/ArticleAccordion.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chapter$2f$ArticleAccordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/chapters/[chapterId]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/chapters/[chapterId]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/constitution.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"title\":\"Constitution of Kenya, 2010\",\"subtitle\":\"The Supreme Law of the Republic of Kenya\",\"promulgationDate\":\"27 August 2010\",\"preamble\":\"We, the people of Kenya, ACKNOWLEDGING the supremacy of the Almighty God of all creation; HONOURING those who heroically struggled to bring freedom and justice to our land; PROUD of our ethnic, cultural and religious diversity, and determined to live in peace and unity as one indivisible sovereign nation; RESPECTFUL of the environment, which is our heritage, and determined to sustain it for the benefit of future generations; COMMITTED to nurturing and protecting the well-being of the individual, the family, communities and the nation; RECOGNISING the aspirations of all Kenyans for a government based on the essential values of human rights, equality, freedom, democracy, social justice and the rule of law; EXERCISING our sovereign and inalienable right to determine the form of governance of our country and having participated fully in the making of this Constitution; ADOPT, ENACT and give this Constitution to ourselves and to our future generations.\",\"totalChapters\":18,\"totalArticles\":264,\"chapters\":[{\"number\":1,\"slug\":\"sovereignty-of-the-people\",\"title\":\"Sovereignty of the People and Supremacy of this Constitution\",\"swahiliTitle\":\"Mamlaka ya Wananchi na Ukuu wa Katiba Hii\",\"articleRange\":\"Articles 1 to 3\",\"summary\":\"Declares that all sovereign power belongs to the people of Kenya, to be exercised directly or through democratically elected representatives. Establishes the Constitution as the supreme law binding all persons and State organs.\",\"category\":\"Foundations\",\"keyProvisions\":[\"All sovereign power belongs to the citizens of Kenya.\",\"Any law or conduct inconsistent with the Constitution is void.\",\"Every citizen has a duty to respect, uphold, and defend the Constitution.\"],\"articles\":[{\"articleNumber\":1,\"title\":\"Sovereignty of the people\",\"summary\":\"All sovereign power belongs to the people of Kenya and shall be exercised only in accordance with this Constitution.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"All sovereign power belongs to the people of Kenya and shall be exercised only in accordance with this Constitution.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The people may exercise their sovereign power either directly or through their democratically elected representatives.\"},{\"clauseNumber\":\"(3)\",\"text\":\"Sovereign power under this Constitution is delegated to the following State organs, which shall perform their functions in accordance with this Constitution: (a) Parliament and the legislative assemblies in the county governments; (b) the national executive and the executive structures in the county governments; and (c) the Judiciary and independent tribunals.\"},{\"clauseNumber\":\"(4)\",\"text\":\"The sovereign power of the people is exercised at: (a) the national level; and (b) the county level.\"}],\"plainExplanation\":\"Citizens hold the ultimate authority in Kenya. Leaders and State officers are caretakers delegated to serve under strict constitutional limits.\"},{\"articleNumber\":2,\"title\":\"Supremacy of this Constitution\",\"summary\":\"The Constitution is the supreme law of the Republic and invalidates any inconsistent law, customary practice, or executive action.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"This Constitution is the supreme law of the Republic and binds all persons and all State organs at both levels of government.\"},{\"clauseNumber\":\"(2)\",\"text\":\"No person may claim or exercise State authority except as authorized under this Constitution.\"},{\"clauseNumber\":\"(3)\",\"text\":\"The validity or legality of this Constitution is not subject to challenge by or before any court or other State organ.\"},{\"clauseNumber\":\"(4)\",\"text\":\"Any law, including customary law, that is inconsistent with this Constitution is void to the extent of the inconsistency, and any act or omission in contravention of this Constitution is invalid.\"},{\"clauseNumber\":\"(5)\",\"text\":\"The general rules of international law shall form part of the law of Kenya.\"},{\"clauseNumber\":\"(6)\",\"text\":\"Any treaty or convention ratified by Kenya shall form part of the law of Kenya under this Constitution.\"}],\"plainExplanation\":\"No president, parliament, governor, police officer, or customary tradition is above this document. Any illegal directive is unconstitutional and unenforceable.\"},{\"articleNumber\":3,\"title\":\"Defense of this Constitution\",\"summary\":\"Places a constitutional obligation on every person to protect, uphold, and resist any unlawful suspension or overthrow of the Constitution.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has an obligation to respect, uphold and defend this Constitution.\"},{\"clauseNumber\":\"(2)\",\"text\":\"Any attempt to establish a government otherwise than in compliance with this Constitution is unlawful.\"}],\"plainExplanation\":\"Defending the constitutional order is a legal right and a civic duty for every Kenyan citizen.\"}]},{\"number\":2,\"slug\":\"the-republic\",\"title\":\"The Republic\",\"swahiliTitle\":\"Jamhuri ya Kenya\",\"articleRange\":\"Articles 4 to 11\",\"summary\":\"Defines Kenya as a multi-party democratic state founded on national values including democracy, rule of law, human rights, devolution, and integrity.\",\"category\":\"Foundations\",\"keyProvisions\":[\"Kenya is a sovereign multi-party democratic Republic.\",\"Article 10 sets mandatory national values and principles of governance.\",\"Official languages are Kiswahili and English, with national language being Kiswahili.\"],\"articles\":[{\"articleNumber\":4,\"title\":\"Declaration of the Republic\",\"summary\":\"Kenya is a sovereign, multi-party democratic State founded on the national values and principles of governance referred to in Article 10.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Kenya is a sovereign, multi-party democratic State founded on the national values and principles of governance referred to in Article 10.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The Republic of Kenya is a multi-party democratic State founded on national values and principles of governance.\"}],\"plainExplanation\":\"No political faction can legally convert Kenya into a one-party state or dictatorship.\"},{\"articleNumber\":10,\"title\":\"National values and principles of governance\",\"summary\":\"Binds all State organs, State officers, and public officers whenever applying, interpreting, or implementing the law or public policy.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The national values and principles of governance in this Article bind all State organs, State officers, public officers and all persons whenever any of them: (a) applies or interprets this Constitution; (b) enacts, applies or interprets any law; or (c) makes or implements public policy decisions.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The national values and principles of governance include: (a) patriotism, national unity, sharing and devolution of power, the rule of law, democracy and participation of the people; (b) human dignity, equity, social justice, inclusiveness, equality, human rights, non-discrimination and protection of the marginalised; (c) good governance, integrity, transparency and accountability; and (d) sustainable development.\"}],\"plainExplanation\":\"Public participation, transparency, and human rights are mandatory legal standards for every government action.\"}]},{\"number\":3,\"slug\":\"citizenship\",\"title\":\"Citizenship\",\"swahiliTitle\":\"Uraia\",\"articleRange\":\"Articles 12 to 18\",\"summary\":\"Outlines rights and duties of Kenyan citizens, acquisition of citizenship by birth or registration, dual citizenship rights, and retention of nationality.\",\"category\":\"Foundations\",\"keyProvisions\":[\"Every citizen is entitled to the rights, privileges, and benefits of citizenship.\",\"Dual citizenship is explicitly permitted for citizens by birth.\",\"Kenyan citizenship cannot be lost by reason only of marriage or dissolution of marriage.\"],\"articles\":[{\"articleNumber\":12,\"title\":\"Entitlements of citizens\",\"summary\":\"Guarantees rights, privileges, passports, and registration documents to all citizens.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every citizen is entitled to: (a) the rights, privileges and benefits of citizenship, subject to the limits provided or permitted by this Constitution; and (b) a Kenyan passport and to any document of registration or identification issued by the State to citizens.\"}],\"plainExplanation\":\"Every Kenyan has an enforceable constitutional right to identity documents and passports without discrimination.\"},{\"articleNumber\":16,\"title\":\"Dual citizenship\",\"summary\":\"A citizen by birth does not lose citizenship by acquiring the citizenship of another country.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"A citizen by birth does not lose citizenship by reason only of acquiring the citizenship of another country.\"}],\"plainExplanation\":\"Kenyans in the diaspora maintain their citizenship rights, voting rights, and property rights.\"}]},{\"number\":4,\"slug\":\"the-bill-of-rights\",\"title\":\"The Bill of Rights\",\"swahiliTitle\":\"Haki na Uhuru wa Msingi\",\"articleRange\":\"Articles 19 to 59\",\"summary\":\"An integral part of Kenya's democratic state and the framework for social, economic, and cultural policies. Protects civil liberties, socio-economic entitlements, and marginalized groups.\",\"category\":\"Rights and Freedoms\",\"keyProvisions\":[\"Article 33: Freedom of expression and the right to seek and share ideas.\",\"Article 35: Right of access to information held by public and private entities.\",\"Article 37: Right, peaceably and unarmed, to assemble, demonstrate, picket, and petition.\",\"Article 43: Economic and social rights to health, housing, food, water, and education.\"],\"articles\":[{\"articleNumber\":19,\"title\":\"Rights and fundamental freedoms\",\"summary\":\"Establishes the Bill of Rights as the cornerstone of Kenya's democratic society, preserving human dignity and equality.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The Bill of Rights is an integral part of Kenya's democratic state and is the framework for social, economic and cultural policies.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The purpose of recognising and protecting human rights and fundamental freedoms is to preserve the dignity of individuals and communities and to promote social justice and the realisation of the potential of all human beings.\"},{\"clauseNumber\":\"(3)\",\"text\":\"The rights and fundamental freedoms in the Bill of Rights: (a) belong to each individual and are not granted by the State; (b) do not exclude other rights and fundamental freedoms not mentioned in the Bill of Rights, in so far as they are consistent with the purposes of the Constitution; and (c) are subject only to the limitations contemplated in this Constitution.\"}],\"plainExplanation\":\"Human rights are inherent to you as a person. The State does not give you rights, and therefore the State cannot arbitrarily withdraw them.\"},{\"articleNumber\":20,\"title\":\"Application of Bill of Rights\",\"summary\":\"Ensures the Bill of Rights applies to all law and binds all State organs and all persons.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The Bill of Rights applies to all law and binds all State organs and all persons.\"},{\"clauseNumber\":\"(2)\",\"text\":\"Every person shall enjoy the rights and fundamental freedoms in the Bill of Rights to the greatest extent consistent with the nature of the right or fundamental freedom.\"}],\"plainExplanation\":\"Courts must interpret legal provisions in favor of expanding human freedoms rather than restricting them.\"},{\"articleNumber\":21,\"title\":\"Implementation of rights and fundamental freedoms\",\"summary\":\"Mandates that the State must observe, respect, protect, promote, and fulfill the rights in the Bill of Rights.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"It is a fundamental duty of the State and every State organ to observe, respect, protect, promote and fulfil the rights and fundamental freedoms in the Bill of Rights.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The State shall take legislative, policy and other measures, including the setting of standards, to achieve the progressive realisation of the rights guaranteed under Article 43.\"},{\"clauseNumber\":\"(3)\",\"text\":\"All State organs and all public officers have the duty to address the needs of vulnerable groups within society, including women, older members of society, persons with disabilities, children, youth, members of minority or marginalised communities, and members of particular ethnic, religious or cultural communities.\"}],\"plainExplanation\":\"Public officials have a legal responsibility to provide basic services and protect vulnerable citizens from neglect or oppression.\"},{\"articleNumber\":22,\"title\":\"Enforcement of Bill of Rights\",\"summary\":\"Empowers any citizen to institute court proceedings claiming that a right or fundamental freedom has been denied, violated, or threatened.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right to institute court proceedings claiming that a right or fundamental freedom in the Bill of Rights has been denied, violated or infringed, or is threatened.\"},{\"clauseNumber\":\"(2)\",\"text\":\"In addition to a person acting in their own interest, court proceedings under clause (1) may be instituted by: (a) a person acting on behalf of another person who cannot act in their own name; (b) a person acting as a member of, or in the interest of, a group or class of persons; (c) a person acting in the public interest; or (d) an association acting in the interest of one or more of its members.\"}],\"plainExplanation\":\"You do not have to be the direct victim to sue the government. Any citizen or NGO can bring public interest litigation on behalf of others.\"},{\"articleNumber\":24,\"title\":\"Limitation of rights and fundamental freedoms\",\"summary\":\"Rights may be limited only by law, and only to the extent that the limitation is reasonable and justifiable in an open and democratic society.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"A right or fundamental freedom in the Bill of Rights shall not be limited except by law, and then only to the extent that the limitation is reasonable and justifiable in an open and democratic society based on human dignity, equality and freedom.\"}],\"plainExplanation\":\"Government cannot arbitrarily curtail your rights through administrative decrees or police pronouncements.\"},{\"articleNumber\":25,\"title\":\"Fundamental rights that may not be limited\",\"summary\":\"Lists absolute rights that cannot be suspended under any circumstances, even during a state of emergency.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Despite any other provision in this Constitution, the following rights and fundamental freedoms shall not be limited: (a) freedom from torture and cruel, inhuman or degrading treatment or punishment; (b) freedom from slavery or servitude; (c) the right to a fair trial; and (d) the right to an order of habeas corpus.\"}],\"plainExplanation\":\"Torture, slavery, unfair trials, and holding detainees without judicial production are strictly illegal under all conditions.\"},{\"articleNumber\":26,\"title\":\"Right to life\",\"summary\":\"Every person has the right to life. Life begins at conception and may not be deprived arbitrarily.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right to life.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The life of a person begins at conception.\"},{\"clauseNumber\":\"(3)\",\"text\":\"A person shall not be deprived of life intentionally, except to the extent authorised by this Constitution or other written law.\"}],\"plainExplanation\":\"Extrajudicial killings and unauthorized fatal police force are clear violations of the supreme law.\"},{\"articleNumber\":27,\"title\":\"Equality and freedom from discrimination\",\"summary\":\"Every person is equal before the law and has the right to equal protection and equal benefit of the law.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person is equal before the law and has the right to equal protection and equal benefit of the law.\"},{\"clauseNumber\":\"(4)\",\"text\":\"The State shall not discriminate directly or indirectly against any person on any ground, including race, sex, pregnancy, marital status, health status, ethnic or social origin, colour, age, disability, religion, conscience, belief, culture, dress, language or birth.\"}],\"plainExplanation\":\"All Kenyans are entitled to equal treatment in public employment, civic opportunities, and justice administration.\"},{\"articleNumber\":28,\"title\":\"Human dignity\",\"summary\":\"Every person has inherent dignity and the right to have that dignity respected and protected.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has inherent dignity and the right to have that dignity respected and protected.\"}],\"plainExplanation\":\"State officials must treat suspects, detainees, and citizens with fundamental dignity at all times.\"},{\"articleNumber\":31,\"title\":\"Privacy\",\"summary\":\"Protects individuals from unlawful searches, seizure of possessions, and infringement of private communications.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right to privacy, which includes the right not to have: (a) their person or home searched; (b) their property searched; (c) their possessions seized; (d) information relating to their family or private affairs unnecessarily required or revealed; or (e) the privacy of their communications infringed.\"}],\"plainExplanation\":\"Police cannot search your person, home, or phone without lawful judicial authorization.\"},{\"articleNumber\":33,\"title\":\"Freedom of expression\",\"summary\":\"Guarantees the freedom to seek, receive, or impart information or ideas, freedom of artistic creativity, and academic freedom.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right to freedom of expression, which includes: (a) freedom to seek, receive or impart information or ideas; (b) freedom of artistic creativity; and (c) academic freedom and freedom of scientific research.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The right to freedom of expression does not extend to: (a) propaganda for war; (b) incitement to violence; (c) hate speech; or (d) advocacy of hatred that constitutes ethnic incitement, vilification of others or incitement to cause harm.\"}],\"plainExplanation\":\"Citizens can freely critique government policies, produce investigative journalism, and express public opinion.\"},{\"articleNumber\":35,\"title\":\"Access to information\",\"summary\":\"Guarantees every citizen the right of access to information held by the State or another person required for rights protection.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every citizen has the right of access to: (a) information held by the State; and (b) information held by another person and required for the exercise or protection of any right or fundamental freedom.\"},{\"clauseNumber\":\"(2)\",\"text\":\"Every person has the right to the correction or deletion of untrue or misleading information that affects the person.\"},{\"clauseNumber\":\"(3)\",\"text\":\"The State shall publish and publicise any important information affecting the nation.\"}],\"plainExplanation\":\"Government procurement records, county budgets, public contracts, and official decisions must be made available upon request.\"},{\"articleNumber\":37,\"title\":\"Assembly, demonstration, picketing and petition\",\"summary\":\"Every person has the right, peaceably and unarmed, to assemble, to demonstrate, to picket, and to present petitions to public authorities.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right, peaceably and unarmed, to assemble, to demonstrate, to picket, and to present petitions to public authorities.\"}],\"plainExplanation\":\"Peaceful protest and demonstration are protected constitutional rights. Police require notice for security coordination, not permission.\"},{\"articleNumber\":43,\"title\":\"Economic and social rights\",\"summary\":\"Guarantees rights to health services, housing, sanitation, adequate food, clean water, social security, and education.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right: (a) to the highest attainable standard of health, which includes the right to health care services, including reproductive health care; (b) to accessible and adequate housing, and to reasonable standards of sanitation; (c) to be free from hunger, and to have adequate food of acceptable quality; (d) to clean and safe water in adequate quantities; (e) to social security; and (f) to education.\"},{\"clauseNumber\":\"(2)\",\"text\":\"A person shall not be denied emergency medical treatment.\"}],\"plainExplanation\":\"Socio-economic rights are justiciable legal entitlements that public budgetary decisions must respect and fulfill.\"},{\"articleNumber\":49,\"title\":\"Rights of arrested persons\",\"summary\":\"Requires immediate notification of the reason for arrest, access to legal counsel, and appearance before a court within 24 hours.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"An arrested person has the right: (a) to be informed promptly, in language that the person understands, of the reason for the arrest; (b) to remain silent; (c) to communicate with an advocate, and other persons whose assistance is necessary; (d) not to be compelled to make any confession or admission; (f) to be brought before a court as soon as reasonably possible, but not later than twenty-four hours after being arrested; and (h) to be released on bond or bail, on reasonable conditions, pending a charge or trial, unless there are compelling reasons not to be released.\"}],\"plainExplanation\":\"Holding suspects beyond 24 hours without court production is unconstitutional. Arrested individuals have an automatic right to apply for bail.\"},{\"articleNumber\":50,\"title\":\"Fair hearing\",\"summary\":\"Guarantees every accused person the right to a fair and public trial before an independent and impartial court.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right to have any dispute that can be resolved by the application of law decided in a fair and public hearing before a court or, if appropriate, another independent and impartial tribunal or body.\"},{\"clauseNumber\":\"(2)\",\"text\":\"Every accused person has the right to a fair trial, which includes the right: (a) to be presumed innocent until the contrary is proved; (b) to be informed of the charge with sufficient detail to answer it; (c) to have adequate time and facilities to prepare a defence; (j) to be informed in advance of the evidence the prosecution intends to rely on, and to have reasonable access to that evidence; and (q) if convicted, to appeal to, or apply for review by, a higher court as prescribed by law.\"}],\"plainExplanation\":\"Every accused person is innocent until proven guilty in an open court with full access to evidence.\"}]},{\"number\":5,\"slug\":\"land-and-environment\",\"title\":\"Land and Environment\",\"swahiliTitle\":\"Ardhi na Mazingira\",\"articleRange\":\"Articles 60 to 72\",\"summary\":\"Classifies land into public, community, and private categories. Mandates equitable access, security of land rights, sustainable management, and elimination of gender discrimination in land law.\",\"category\":\"Governance\",\"keyProvisions\":[\"Land is held, used, and managed equitably, efficiently, productively, and sustainably.\",\"Classification into public land, community land, and private land.\",\"Obligation to maintain at least ten percent tree cover across Kenya.\"],\"articles\":[{\"articleNumber\":60,\"title\":\"Principles of land policy\",\"summary\":\"Sets out principles governing land ownership, security of land rights, and transparent dispute resolution.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Land in Kenya shall be held, used and managed in a manner that is equitable, efficient, productive and sustainable, and in accordance with the following principles: (a) equitable access to land; (b) security of land rights; (c) sustainable and productive management of land resources; (d) transparent and cost effective administration of land; (e) sound conservation and protection of ecologically sensitive areas; (f) elimination of gender discrimination in law, customs and practices related to land and property in land; and (g) encouragement of communities to settle land disputes through recognised local community initiatives consistent with this Constitution.\"}],\"plainExplanation\":\"Guarantees equal land ownership rights for women and protects ancestral community lands.\"},{\"articleNumber\":69,\"title\":\"Obligations in respect of the environment\",\"summary\":\"Mandates sustainable exploitation of natural resources and public tree cover protection.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The State shall: (a) ensure sustainable exploitation, utilisation, management and conservation of the environment and natural resources; (b) work to achieve and maintain a tree cover of at least ten per cent of the land area of Kenya; and (d) encourage public participation in the management, protection and conservation of the environment.\"}],\"plainExplanation\":\"Citizens have an actionable right to a clean and healthy environment and public environmental oversight.\"}]},{\"number\":6,\"slug\":\"leadership-and-integrity\",\"title\":\"Leadership and Integrity\",\"swahiliTitle\":\"Uongozi na Maadili\",\"articleRange\":\"Articles 73 to 80\",\"summary\":\"Establishes that public office is a trust to be exercised with honor, dignity, and accountability to the people. Sets strict standards against conflicts of interest and corruption.\",\"category\":\"Accountability\",\"keyProvisions\":[\"Authority assigned to a State officer is a public trust.\",\"State officers must avoid any conflict of interest between private gain and public duty.\",\"Financial probity, open declaration of foreign bank accounts, and civic accountability.\"],\"articles\":[{\"articleNumber\":73,\"title\":\"Responsibilities of leadership\",\"summary\":\"Authority assigned to a State officer must be exercised in a manner that honors the nation and promotes public confidence.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Authority assigned to a State officer: (a) is a public trust to be exercised in a manner that: (i) is consistent with the purposes and objects of this Constitution; (ii) demonstrates respect for the people; (iii) brings honour to the nation and dignity to the office; and (iv) promotes public confidence in the integrity of the office; and (b) vests in the State officer the responsibility to serve the people, rather than the power to rule them.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The guiding principles of leadership and integrity include: (a) selection on the basis of personal integrity, competence and suitability; (b) objectivity and impartiality in decision making; (c) selfless service based solely on the public interest; (d) accountability to the public for decisions and actions; and (e) discipline and commitment in service to the people.\"}],\"plainExplanation\":\"Elected and appointed officials are public servants obligated to serve the people, not rulers above scrutiny.\"},{\"articleNumber\":75,\"title\":\"Conduct of State officers\",\"summary\":\"Bars State officers from engaging in conflicts of interest, demeaning office dignity, or compromising public duties.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"A State officer shall behave, whether in public and official life, in private life, or in association with other persons, in a manner that avoids: (a) any conflict between personal interests and public or official duties; (b) compromising any public or official interest in favour of a personal interest; or (c) demeaning the office the officer holds.\"},{\"clauseNumber\":\"(2)\",\"text\":\"A person who contravenes the provisions of clause (1) or Article 76, 77 or 78 (2) shall be dismissed or removed from office, and is disqualified from holding any other State office.\"}],\"plainExplanation\":\"Violating integrity requirements leads to disqualification from holding any public office in Kenya.\"}]},{\"number\":7,\"slug\":\"representation-of-the-people\",\"title\":\"Representation of the People\",\"swahiliTitle\":\"Uwakilishi wa Wananchi\",\"articleRange\":\"Articles 81 to 92\",\"summary\":\"Governs the electoral system, general principles of voting, voter registration, political parties, and the Independent Electoral and Boundaries Commission (IEBC).\",\"category\":\"Governance\",\"keyProvisions\":[\"Free and fair elections by secret ballot, transparent tallying, and impartial administration.\",\"Enforces the two-thirds gender principle in elective and appointive bodies.\",\"Political parties must have a national character and promote democratic accountability.\"],\"articles\":[{\"articleNumber\":81,\"title\":\"General principles for the electoral system\",\"summary\":\"Elections must be free, fair, transparent, and administered impartially by an independent body.\",\"clauses\":[{\"clauseNumber\":\"(a)\",\"text\":\"Citizens are entitled to exercise their political rights under Article 38.\"},{\"clauseNumber\":\"(b)\",\"text\":\"Not more than two-thirds of the members of elective public bodies shall be of the same gender.\"},{\"clauseNumber\":\"(e)\",\"text\":\"Free and fair elections, which are: (i) by secret ballot; (ii) free from violence, intimidation, improper influence or corruption; (iii) conducted by an independent body; (iv) transparent; and (v) administered in an impartial, neutral, efficient, accurate and accountable manner.\"}],\"plainExplanation\":\"All elections must be transparent, verifiable, and protected from state-sponsored coercion.\"},{\"articleNumber\":88,\"title\":\"Independent Electoral and Boundaries Commission\",\"summary\":\"Establishes the IEBC responsible for conducting referenda and elections to any elective body established by the Constitution.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"There is established the Independent Electoral and Boundaries Commission.\"},{\"clauseNumber\":\"(4)\",\"text\":\"The Commission is responsible for conducting or supervising referenda and elections to any elective body or office established by this Constitution, and any other elections as prescribed by an Act of Parliament.\"}],\"plainExplanation\":\"The IEBC is an independent constitutional body responsible for continuous voter registration and verifiable vote tallies.\"}]},{\"number\":8,\"slug\":\"the-legislature\",\"title\":\"The Legislature\",\"swahiliTitle\":\"Bunge\",\"articleRange\":\"Articles 93 to 128\",\"summary\":\"Establishes a bicameral Parliament comprising the National Assembly and the Senate. Details lawmaking processes, legislative oversight, and impeachment procedures.\",\"category\":\"State Organs\",\"keyProvisions\":[\"Bicameral Parliament consisting of the National Assembly and the Senate.\",\"National Assembly controls national revenue bills and executive oversight.\",\"Senate represents counties and protects devolution interests.\"],\"articles\":[{\"articleNumber\":93,\"title\":\"Establishment of Parliament\",\"summary\":\"Establishes Parliament consisting of the National Assembly and the Senate.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"There is established a Parliament of Kenya, which shall consist of the National Assembly and the Senate.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The Parliament shall perform its functions in accordance with this Constitution.\"}],\"plainExplanation\":\"Re-established the Senate abolished in 1968 to guard county autonomy and resource allocation.\"},{\"articleNumber\":118,\"title\":\"Public access and participation\",\"summary\":\"Requires Parliament to conduct business in an open manner and facilitate public participation in the legislative process.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Parliament shall: (a) conduct its business in an open manner, and its sittings and those of its committees shall be in public; and (b) facilitate public involvement in the legislative and other business of Parliament and its committees.\"}],\"plainExplanation\":\"Secret parliamentary sittings and passing bills without meaningful public input violate the Constitution.\"}]},{\"number\":9,\"slug\":\"the-executive\",\"title\":\"The Executive\",\"swahiliTitle\":\"Serikali Kuu\",\"articleRange\":\"Articles 129 to 158\",\"summary\":\"Structures the Executive comprising the President, Deputy President, and Cabinet Secretaries. Eliminates imperial presidency and subjects appointments to parliamentary vetting.\",\"category\":\"State Organs\",\"keyProvisions\":[\"Executive authority derives from the people and is subordinate to the Constitution.\",\"President is Head of State and Government, Commander-in-Chief, and symbol of national unity.\",\"Strict limits on presidential appointments requiring parliamentary vetting and approval.\"],\"articles\":[{\"articleNumber\":129,\"title\":\"Principles of executive authority\",\"summary\":\"Executive authority derives from the people of Kenya and shall be exercised in accordance with this Constitution.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Executive authority derives from the people of Kenya and shall be exercised in accordance with this Constitution.\"},{\"clauseNumber\":\"(2)\",\"text\":\"Executive authority shall be exercised in a manner compatible with the principle of service to the people of Kenya, and for their well-being and benefit.\"}],\"plainExplanation\":\"The President is accountable to the law and cannot govern through unlawful unilateral decrees.\"},{\"articleNumber\":131,\"title\":\"Authority of the President\",\"summary\":\"Defines presidential duties to respect, uphold, and safeguard the Constitution and national sovereignty.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The President: (a) is the Head of State and Head of Government; (b) exercises the executive authority of the Republic, with the assistance of the Deputy President and Cabinet Secretaries; (c) is the Commander-in-Chief of the Kenya Defence Forces; (d) is the chairperson of the National Security Council; and (e) is a symbol of national unity.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The President shall: (a) respect, uphold and safeguard this Constitution; (b) safeguard the sovereignty of the Republic; (c) promote and respect the diversity of the people and communities of Kenya; and (d) ensure the protection of human rights and fundamental freedoms and the rule of law.\"}],\"plainExplanation\":\"The President must represent the entirety of the nation without favoritism toward any ethnic or political faction.\"}]},{\"number\":10,\"slug\":\"judiciary\",\"title\":\"Judiciary\",\"swahiliTitle\":\"Idara ya Mahakama\",\"articleRange\":\"Articles 159 to 173\",\"summary\":\"Guarantees judicial independence, establishes the Supreme Court, Court of Appeal, High Court, and Judicial Service Commission to prevent executive interference.\",\"category\":\"State Organs\",\"keyProvisions\":[\"Judicial authority is derived from the people and vests in courts and tribunals.\",\"Justice shall not be delayed and shall be administered without undue regard to procedural technicalities.\",\"Creation of the Supreme Court to handle presidential election petitions and constitutional interpretation.\"],\"articles\":[{\"articleNumber\":159,\"title\":\"Judicial authority\",\"summary\":\"Judicial authority is derived from the people and vests in the courts and tribunals established by the Constitution.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Judicial authority is derived from the people and vests in, and shall be exercised by, the courts and tribunals established by or under this Constitution.\"},{\"clauseNumber\":\"(2)\",\"text\":\"In exercising judicial authority, the courts and tribunals shall be guided by the following principles: (a) justice shall be done to all, irrespective of status; (b) justice shall not be delayed; (c) alternative forms of dispute resolution including reconciliation, mediation, arbitration and traditional dispute resolution mechanisms shall be promoted; (d) justice shall be administered without undue regard to procedural technicalities; and (e) the purpose and principles of this Constitution shall be protected and promoted.\"}],\"plainExplanation\":\"Judges are bound only by the law and the Constitution, completely free from executive or legislative command.\"},{\"articleNumber\":160,\"title\":\"Independence of the Judiciary\",\"summary\":\"Judicial officers are subject only to the Constitution and law and are immune from control or direction by any person or authority.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"In the exercise of judicial authority, the Judiciary, as constituted by or under Article 161, shall be subject only to this Constitution and the law and shall not be subject to the control or direction of any person or authority.\"}],\"plainExplanation\":\"Direct political pressure or financial retaliation against judicial officers is unconstitutional.\"}]},{\"number\":11,\"slug\":\"devolved-government\",\"title\":\"Devolved Government\",\"swahiliTitle\":\"Serikali za Ugatuzi\",\"articleRange\":\"Articles 174 to 200\",\"summary\":\"Establishes 47 County Governments to decentralize state functions, distribute national resources equitably, and give communities direct control of local development.\",\"category\":\"Governance\",\"keyProvisions\":[\"Establishes 47 distinct County Governments with County Assemblies and County Executives.\",\"Protects grassroots self-governance and public participation in county affairs.\",\"Guarantees that at least 15 percent of all national revenue is shared unconditionally with counties.\"],\"articles\":[{\"articleNumber\":174,\"title\":\"Objects of devolution\",\"summary\":\"Promotes democratic, accountable exercise of power, national unity, self-governance, and equitable resource sharing.\",\"clauses\":[{\"clauseNumber\":\"(a)\",\"text\":\"To promote democratic and accountable exercise of power.\"},{\"clauseNumber\":\"(c)\",\"text\":\"To give powers of self-governance to the people and enhance the participation of the people in the exercise of the powers of the State and in making decisions affecting them.\"},{\"clauseNumber\":\"(d)\",\"text\":\"To recognise the right of communities to manage their own affairs and to further their development.\"},{\"clauseNumber\":\"(f)\",\"text\":\"To promote social and economic development and the provision of proximate, easily accessible services throughout Kenya.\"}],\"plainExplanation\":\"Devolution ended decades of Nairobi-centric resource hoarding by taking budgets and decision-making straight to the 47 counties.\"},{\"articleNumber\":196,\"title\":\"Public access and participation\",\"summary\":\"County Assemblies must conduct their proceedings in public and actively facilitate public involvement in legislation.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"A county assembly shall: (a) conduct its business in an open manner, and hold its sittings and those of its committees, in public; and (b) facilitate public participation and involvement in the legislative and other business of the assembly and its committees.\"}],\"plainExplanation\":\"County budgets, development plans, and bills passed without public hearings can be quashed by the High Court.\"}]},{\"number\":12,\"slug\":\"public-finance\",\"title\":\"Public Finance\",\"swahiliTitle\":\"Fedha za Umma\",\"articleRange\":\"Articles 201 to 231\",\"summary\":\"Establishes principles of openness, accountability, and equitable public expenditure. Creates the Office of the Controller of Budget and Auditor-General.\",\"category\":\"Accountability\",\"keyProvisions\":[\"Article 201: Principles of public finance enforcing transparency and equitable tax burdens.\",\"Creation of the Controller of Budget to approve lawful state fund withdrawals.\",\"Auditor-General empowered to independently audit all public spending accounts.\"],\"articles\":[{\"articleNumber\":201,\"title\":\"Principles of public finance\",\"summary\":\"Directs openness, accountability, equitable sharing of taxes, and prudent use of public money.\",\"clauses\":[{\"clauseNumber\":\"(a)\",\"text\":\"There shall be openness and accountability, including public participation in financial matters.\"},{\"clauseNumber\":\"(b)\",\"text\":\"The public finance system shall promote an equitable society: (i) the burden of taxation shall be shared fairly; (ii) revenue raised nationally shall be shared equitably between national and county governments; and (iii) expenditure shall promote equitable development of the country.\"},{\"clauseNumber\":\"(c)\",\"text\":\"The burdens and benefits of the use of resources and public borrowing shall be shared equitably between present and future generations.\"},{\"clauseNumber\":\"(d)\",\"text\":\"Public money shall be used in a prudent and responsible manner.\"},{\"clauseNumber\":\"(e)\",\"text\":\"Financial management shall be responsible, and fiscal reporting shall be clear.\"}],\"plainExplanation\":\"Public debt, national budget approvals, and tax policies must undergo open public scrutiny and fair intergenerational balance.\"},{\"articleNumber\":228,\"title\":\"Controller of Budget\",\"summary\":\"Oversees the implementation of national and county budgets and approves withdrawals from public accounts.\",\"clauses\":[{\"clauseNumber\":\"(4)\",\"text\":\"The Controller of Budget shall oversee the implementation of the budgets of the national and county governments.\"},{\"clauseNumber\":\"(5)\",\"text\":\"The Controller of Budget shall not approve any withdrawal from a public fund unless satisfied that the withdrawal is authorised by law.\"}],\"plainExplanation\":\"No government ministry or county executive can withdraw public funds without legal authorization from the Controller of Budget.\"},{\"articleNumber\":229,\"title\":\"Auditor-General\",\"summary\":\"Audits all public accounts of national and county governments, courts, commissions, and independent offices.\",\"clauses\":[{\"clauseNumber\":\"(4)\",\"text\":\"Within six months after the end of each financial year, the Auditor-General shall audit and report, in respect of that financial year, on: (a) the accounts of the national and county governments; (b) the accounts of all funds and authorities of the national and county governments; and (g) the accounts of all other public entities.\"}],\"plainExplanation\":\"Provides objective, independent reports on public spending to uncover graft and ensure fiscal integrity.\"}]},{\"number\":13,\"slug\":\"the-public-service\",\"title\":\"The Public Service\",\"swahiliTitle\":\"Utumishi wa Umma\",\"articleRange\":\"Articles 232 to 237\",\"summary\":\"Establishes values of professional ethics, merit-based appointments, transparent service delivery, and the Public Service Commission.\",\"category\":\"Accountability\",\"keyProvisions\":[\"High standards of professional ethics and responsive service delivery.\",\"Merit-based recruitment reflecting Kenya's diverse regional and ethnic communities.\",\"Teachers Service Commission constitutionally mandated to manage teachers.\"],\"articles\":[{\"articleNumber\":232,\"title\":\"Values and principles of public service\",\"summary\":\"Mandates ethical service, efficiency, accountability, and fair competition in public hiring.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The values and principles of public service include: (a) high standards of professional ethics; (b) efficient, effective and economic use of resources; (c) responsive, prompt, effective, impartial and equitable provision of services; (d) involvement of the people in the process of policy making; (f) transparency and provision to the public of timely, accurate information; and (h) representation of Kenya's diverse communities.\"}],\"plainExplanation\":\"Public servants must serve all citizens without tribal discrimination, corruption, or political bias.\"}]},{\"number\":14,\"slug\":\"national-security\",\"title\":\"National Security\",\"swahiliTitle\":\"Usalama wa Kitaifa\",\"articleRange\":\"Articles 238 to 247\",\"summary\":\"Regulates national security organs: Kenya Defence Forces (KDF), National Intelligence Service (NIS), and National Police Service (NPS). Subjects security forces to civilian authority and human rights standards.\",\"category\":\"State Organs\",\"keyProvisions\":[\"National security shall be pursued in compliance with the law and human rights standards.\",\"Security organs are strictly non-partisan and forbidden from acting for political interests.\",\"Creation of the independent National Police Service Commission and IPOA oversight.\"],\"articles\":[{\"articleNumber\":238,\"title\":\"Principles of national security\",\"summary\":\"Security must promote human dignity, democracy, rule of law, and regional peace.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"National security is the protection against internal and external threats to Kenya's territorial integrity and sovereignty, its people, their rights, freedoms, property, peace, stability and prosperity.\"},{\"clauseNumber\":\"(2)\",\"text\":\"National security shall be pursued in compliance with the law and with the utmost respect for the rule of law, democracy, human rights and fundamental freedoms.\"}],\"plainExplanation\":\"National security operations can never be used as an excuse to suspend fundamental human rights or commit torture.\"},{\"articleNumber\":239,\"title\":\"National security organs\",\"summary\":\"Bars security agencies from partisan political activity or serving private factional interests.\",\"clauses\":[{\"clauseNumber\":\"(3)\",\"text\":\"In performing their functions and exercising their powers, the national security organs and every member of the national security organs shall not: (a) act in a partisan manner; (b) further any interest of a political party or cause; or (c) prejudice a political interest or political cause that is legitimate under this Constitution.\"}],\"plainExplanation\":\"Police and intelligence officers cannot be mobilized to harass political opposition or rig elections.\"}]},{\"number\":15,\"slug\":\"commissions-and-independent-offices\",\"title\":\"Commissions and Independent Offices\",\"swahiliTitle\":\"Tume na Ofisi Huru\",\"articleRange\":\"Articles 248 to 254\",\"summary\":\"Protects constitutional democracy by establishing independent watchdogs immune from direction or control by the executive or any other authority.\",\"category\":\"Accountability\",\"keyProvisions\":[\"Guarantees total independence from political interference or executive control.\",\"Commissions include IEBC, KNCHR, NLC, SRC, CRA, and JSC.\",\"Independent offices include Auditor-General and Controller of Budget.\"],\"articles\":[{\"articleNumber\":249,\"title\":\"Objects, authority and funding of commissions and independent offices\",\"summary\":\"Independent commissions exist to protect sovereignty of the people and secure observance of democratic values.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The objects of the commissions and the independent offices are to: (a) protect the sovereignty of the people; (b) secure the observance by all State organs of democratic values and principles; and (c) promote constitutionalism.\"},{\"clauseNumber\":\"(2)\",\"text\":\"The commissions and the holders of independent offices: (a) are subject only to this Constitution and the law; and (b) are independent and not subject to direction or control by any person or authority.\"}],\"plainExplanation\":\"Constitutional commissions serve as checks on government power and cannot take orders from ministries.\"}]},{\"number\":16,\"slug\":\"amendment-of-this-constitution\",\"title\":\"Amendment of this Constitution\",\"swahiliTitle\":\"Kufanya Marekebisho kwenye Katiba Hii\",\"articleRange\":\"Articles 255 to 257\",\"summary\":\"Establishes stringent safeguards against arbitrary constitutional mutilation. Requires mandatory national referenda for core sovereign provisions.\",\"category\":\"Foundations\",\"keyProvisions\":[\"Article 255 specifies matters requiring approval by a national referendum.\",\"Parliamentary initiative requires two-thirds supermajorities in both Houses.\",\"Popular initiative requires at least one million registered voters and approval by 24 County Assemblies.\"],\"articles\":[{\"articleNumber\":255,\"title\":\"Amendment by referendum\",\"summary\":\"Lists protected constitutional chapters and principles that can only be altered through a national referendum.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"A proposed amendment to this Constitution where the amendment relates to any of the following matters shall be enacted only in accordance with Article 256 or 257, and approved in a referendum in accordance with clause (2): (a) the supremacy of this Constitution; (b) the territory of Kenya; (c) the sovereignty of the people; (d) the national values and principles of governance referred to in Article 10; (e) the Bill of Rights; (f) the term of office of the President; (g) the independence of the Judiciary and the commissions; (h) the functions of Parliament; (i) the objects, principles and structure of devolved government; or (j) the provisions of this Chapter.\"}],\"plainExplanation\":\"Politicians cannot alter core democratic guarantees or presidential terms without holding a nationwide referendum.\"},{\"articleNumber\":257,\"title\":\"Amendment by popular initiative\",\"summary\":\"Provides the procedure for ordinary citizens to propose constitutional changes through one million signatures.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"An amendment to this Constitution may be proposed by a popular initiative signed by at least one million registered voters.\"}],\"plainExplanation\":\"Citizens have direct democratic power to initiate constitutional changes independently of the ruling party.\"}]},{\"number\":17,\"slug\":\"general-provisions\",\"title\":\"General Provisions\",\"swahiliTitle\":\"Masharti ya Jumla\",\"articleRange\":\"Articles 258 to 260\",\"summary\":\"Provides judicial enforcement rules for constitutional claims, definitions, and interpretive guidelines for courts.\",\"category\":\"Governance\",\"keyProvisions\":[\"Article 258: Universal right to institute court proceedings against any constitutional violation.\",\"Rejection of restrictive legal standing doctrines to encourage public interest litigation.\",\"Definitions of key legal terms and offices across the Republic.\"],\"articles\":[{\"articleNumber\":258,\"title\":\"Enforcement of this Constitution\",\"summary\":\"Every person has the right to institute court proceedings claiming that this Constitution has been contravened, or is threatened with contravention.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Every person has the right to institute court proceedings claiming that this Constitution has been contravened, or is threatened with contravention.\"},{\"clauseNumber\":\"(2)\",\"text\":\"In addition to a person acting in their own interest, court proceedings under clause (1) may be instituted by: (a) a person acting on behalf of another person who cannot act in their own name; (b) a person acting as a member of, or in the interest of, a group or class of persons; (c) a person acting in the public interest; or (d) an association acting in the interest of one or more of its members.\"}],\"plainExplanation\":\"Any citizen can file a constitutional petition to stop unlawful government decisions without needing direct personal injury.\"}]},{\"number\":18,\"slug\":\"transitional-and-consequential-provisions\",\"title\":\"Transitional and Consequential Provisions\",\"swahiliTitle\":\"Masharti ya Mpito na Matokeo\",\"articleRange\":\"Articles 261 to 264\",\"summary\":\"Sets the statutory schedule for enacting implementing legislation, repealing the former 1963 Constitution, and managing the transition to devolved governance.\",\"category\":\"Governance\",\"keyProvisions\":[\"Fifth Schedule sets strict deadlines for Parliament to enact implementing laws.\",\"Repeal of the former 1963 Constitution upon promulgation.\",\"Sixth Schedule governs transitional preservation of existing laws and judicial operations.\"],\"articles\":[{\"articleNumber\":261,\"title\":\"Enactment of legislation\",\"summary\":\"Mandates Parliament to enact required constitutional legislation within statutory deadlines specified in the Fifth Schedule.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"Parliament shall enact any legislation required by this Constitution to be enacted to govern a particular matter within the period specified in the Fifth Schedule, commencing on the effective date.\"}],\"plainExplanation\":\"Parliament was given strict timelines to pass laws operationalizing human rights, devolution, and judicial reforms.\"},{\"articleNumber\":264,\"title\":\"Repeal of the former Constitution\",\"summary\":\"The Constitution in force immediately before the effective date stands repealed upon promulgation.\",\"clauses\":[{\"clauseNumber\":\"(1)\",\"text\":\"The Constitution in force immediately before the effective date shall stand repealed on the effective date, subject to the Sixth Schedule.\"}],\"plainExplanation\":\"Officially replaced the imperial colonial-era constitution with Kenya's transformative 2010 supreme law.\"}]}]}");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14uul-u_05c6m._.js.map