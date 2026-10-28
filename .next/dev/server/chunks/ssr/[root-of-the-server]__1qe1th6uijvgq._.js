module.exports = [
(()=>{"use strict";return[
"[project]/src/components/BudgetTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BudgetTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$budgetCycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/budgetCycle.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BudgetTracker() {
    const [expandedStageId, setExpandedStageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$budgetCycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KENYA_COUNTY_BUDGET_CYCLE"].map((stage, index)=>{
            const isExpanded = expandedStageId === stage.id;
            const panelId = `budget-stage-${stage.id}`;
            const triggerId = `budget-stage-trigger-${stage.id}`;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `overflow-hidden rounded-card border-2 transition-colors ${isExpanded ? "border-flag-green bg-white" : "border-rule bg-white"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: triggerId,
                            type: "button",
                            "aria-expanded": isExpanded,
                            "aria-controls": panelId,
                            onClick: ()=>setExpandedStageId(isExpanded ? null : stage.id),
                            className: "flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-paper focus-visible:bg-paper sm:p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-sans text-sm font-black ${isExpanded ? "bg-flag-green text-white" : "bg-paper text-ink"}`,
                                    "aria-hidden": "true",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BudgetTracker.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-sans text-[11px] font-black uppercase tracking-wide text-flag-red",
                                            children: stage.deadline
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BudgetTracker.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 block font-sans text-base font-bold text-ink sm:text-lg",
                                            children: stage.stageName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BudgetTracker.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BudgetTracker.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `h-5 w-5 shrink-0 text-ink transition-transform ${isExpanded ? "rotate-180" : ""}`,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BudgetTracker.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BudgetTracker.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BudgetTracker.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            id: panelId,
                            role: "region",
                            "aria-labelledby": triggerId,
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.22,
                                ease: "easeInOut"
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-rule px-5 py-5 sm:px-8 sm:py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-xs font-bold uppercase tracking-wide text-flag-green",
                                        children: stage.legalFramework
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 grid gap-6 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 font-sans text-xs font-black uppercase tracking-wide text-ink-muted",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                                className: "h-4 w-4 text-flag-red",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BudgetTracker.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Statutory deadline"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 font-serif text-base leading-relaxed text-ink",
                                                        children: stage.deadline
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "mt-5 font-sans text-xs font-black uppercase tracking-wide text-ink-muted",
                                                        children: "Process summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 font-serif text-sm leading-relaxed text-ink",
                                                        children: stage.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BudgetTracker.tsx",
                                                lineNumber: 82,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-card border-l-4 border-flag-green bg-paper p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-sans text-xs font-black uppercase tracking-wide text-flag-green",
                                                        children: "Required citizen action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "mt-3 space-y-3",
                                                        children: stage.citizenAction.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 font-serif text-sm leading-relaxed text-ink",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        className: "mt-2 h-2 w-2 shrink-0 rounded-full bg-flag-green"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    action
                                                                ]
                                                            }, action, true, {
                                                                fileName: "[project]/src/components/BudgetTracker.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/BudgetTracker.tsx",
                                                lineNumber: 100,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                        lineNumber: 81,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 border-t border-rule pt-4 font-serif text-xs leading-relaxed text-ink-muted",
                                        children: "Deadlines are statutory latest dates. Check current notices from your County Treasury and County Assembly for hearing dates and submission instructions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BudgetTracker.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BudgetTracker.tsx",
                                lineNumber: 77,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BudgetTracker.tsx",
                            lineNumber: 67,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BudgetTracker.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                ]
            }, stage.id, true, {
                fileName: "[project]/src/components/BudgetTracker.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/BudgetTracker.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MemoGenerator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-plus-2.js [app-ssr] (ecmascript) <export default as FilePlus2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$budgetCycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/budgetCycle.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const fieldClassName = "mt-1 w-full rounded-control border-2 border-ink bg-white px-3 py-2.5 font-sans text-sm text-ink focus:border-flag-green focus:outline-none";
const emptyMemoItem = ()=>({
        clause: "",
        issue: "",
        proposal: ""
    });
function safePdfText(value) {
    return value.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/[\u2013\u2014]/g, "-").replace(/\u00a0/g, " ");
}
function MemoGenerator() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        nationalId: "",
        county: "",
        ward: "",
        targetBody: "County Assembly",
        targetDocument: "",
        objections: [
            emptyMemoItem()
        ]
    });
    const [selectedBudgetStage, setSelectedBudgetStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pdfError, setPdfError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const updateField = (field, value)=>{
        setFormData((current)=>({
                ...current,
                [field]: value
            }));
    };
    const updateMemoItem = (index, field, value)=>{
        setFormData((current)=>({
                ...current,
                objections: current.objections.map((item, itemIndex)=>itemIndex === index ? {
                        ...item,
                        [field]: value
                    } : item)
            }));
    };
    const addMemoItem = ()=>{
        setFormData((current)=>({
                ...current,
                objections: [
                    ...current.objections,
                    emptyMemoItem()
                ]
            }));
    };
    const removeMemoItem = (index)=>{
        setFormData((current)=>({
                ...current,
                objections: current.objections.filter((_, itemIndex)=>itemIndex !== index)
            }));
    };
    const generatePDF = (event)=>{
        event.preventDefault();
        setPdfError("");
        try {
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                unit: "mm",
                format: "a4"
            });
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pageWidth - margin * 2;
            const lineHeight = 5;
            let y = margin;
            const ensureSpace = (height)=>{
                if (y + height > pageHeight - margin) {
                    doc.addPage();
                    y = margin;
                }
            };
            const addParagraph = (text, options = {})=>{
                const { bold = false, fontSize = 10, indent = 0, after = 3 } = options;
                doc.setFont("helvetica", bold ? "bold" : "normal");
                doc.setFontSize(fontSize);
                const lines = doc.splitTextToSize(safePdfText(text), contentWidth - indent);
                lines.forEach((line)=>{
                    ensureSpace(lineHeight);
                    doc.text(line, margin + indent, y);
                    y += lineHeight;
                });
                y += after;
            };
            doc.setFillColor(10, 92, 39);
            doc.roundedRect(margin, y, contentWidth, 20, 2, 2, "F");
            doc.setTextColor(255, 255, 255);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text("PUBLIC PARTICIPATION MEMORANDUM", margin + 6, y + 8);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.text("CONSTITUTION OF KENYA, 2010 - ARTICLES 10, 118 AND 201", margin + 6, y + 15);
            doc.setTextColor(17, 17, 17);
            y += 28;
            addParagraph(`TO: THE CLERK OF THE ${formData.targetBody.toUpperCase()}`, {
                bold: true,
                after: 1
            });
            if (formData.targetBody === "County Assembly") {
                addParagraph(`COUNTY ASSEMBLY OF ${formData.county.toUpperCase()}`, {
                    bold: true,
                    after: 1
                });
            }
            addParagraph(`RE: PUBLIC COMMENTS ON ${formData.targetDocument}`, {
                bold: true,
                after: 6
            });
            addParagraph("PETITIONER DETAILS", {
                bold: true,
                fontSize: 11,
                after: 2
            });
            addParagraph(`Name: ${formData.fullName}`, {
                after: 1
            });
            addParagraph(`National ID number: ${formData.nationalId}`, {
                after: 1
            });
            addParagraph(`County: ${formData.county}`, {
                after: 1
            });
            addParagraph(`Ward: ${formData.ward}`, {
                after: 6
            });
            addParagraph("SUBMISSION", {
                bold: true,
                fontSize: 11,
                after: 2
            });
            addParagraph(`I submit the following comments and proposals on ${formData.targetDocument} for consideration by the ${formData.targetBody}. Please consider these views as part of the public participation process.`, {
                after: 6
            });
            formData.objections.forEach((item, index)=>{
                addParagraph(`ITEM ${index + 1}: ${item.clause}`, {
                    bold: true,
                    fontSize: 11,
                    after: 2
                });
                addParagraph(`Concern or objection: ${item.issue}`, {
                    indent: 4,
                    after: 2
                });
                addParagraph(`        Proposed replacement amendment or action: ${item.proposal}`, {
                    indent: 4,
                    after: 6
                });
            });
            addParagraph("I confirm that these comments reflect my views and are submitted for consideration in the public interest.", {
                after: 8
            });
            addParagraph(`DATED at ${formData.ward}, ${formData.county}, this ${new Date().toLocaleDateString("en-GB")}.`, {
                after: 12
            });
            addParagraph("Petitioner's signature: __________________________________", {
                bold: true,
                after: 12
            });
            addParagraph("FOR OFFICIAL USE", {
                bold: true,
                fontSize: 9,
                after: 2
            });
            addParagraph("Received by: __________________________    Date: ______________", {
                after: 2
            });
            addParagraph("Office / reference number: _____________________________________", {
                after: 2
            });
            const pageCount = doc.getNumberOfPages();
            for(let page = 1; page <= pageCount; page += 1){
                doc.setPage(page);
                doc.setDrawColor(217, 220, 223);
                doc.line(margin, pageHeight - 13, pageWidth - margin, pageHeight - 13);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8);
                doc.setTextColor(100, 100, 100);
                doc.text("Soma Katiba KE | Public participation memorandum", margin, pageHeight - 8);
                doc.text(`${page} / ${pageCount}`, pageWidth - margin, pageHeight - 8, {
                    align: "right"
                });
            }
            const fileName = formData.fullName.trim().replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
            doc.save(`Public_Participation_Memo_${fileName || "Citizen"}.pdf`);
        } catch (error) {
            console.error("Failed to generate public participation memorandum PDF.", error);
            setPdfError("The PDF could not be generated. Please try again or print this page instead.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "group rounded-card border border-rule bg-white open:border-flag-green",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "flex cursor-pointer list-none items-center justify-between gap-4 rounded-card p-4 transition-colors hover:bg-paper focus-visible:bg-paper [&::-webkit-details-marker]:hidden sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block font-sans text-[11px] font-bold uppercase tracking-wider text-flag-green",
                                children: "Articles 10, 118 and 201"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block font-sans text-base font-black text-ink sm:text-lg",
                                children: "Official Citizen Petition Letter"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block font-serif text-xs leading-relaxed text-ink-muted sm:text-sm",
                                children: "Open the form to draft and download a public participation memo."
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemoGenerator.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex shrink-0 items-center gap-2 rounded-control bg-flag-green px-3 py-2 font-sans text-xs font-bold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Open form"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-4 w-4 transition-transform group-open:rotate-180",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemoGenerator.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MemoGenerator.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "region",
                "aria-label": "Public participation memorandum form",
                className: "border-t border-rule p-4 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 max-w-3xl font-serif text-sm leading-relaxed text-ink-muted",
                        children: "Prepare a printable submission with your details, clause references, concerns, and specific proposals. Your information stays in this browser and is only included in the PDF you download."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemoGenerator.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: generatePDF,
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        className: "font-sans text-sm font-bold text-ink",
                                        children: "Petitioner and submission details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                        lineNumber: 282,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "Petitioner name",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        autoComplete: "name",
                                                        required: true,
                                                        value: formData.fullName,
                                                        onChange: (event)=>updateField("fullName", event.target.value),
                                                        className: fieldClassName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 286,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "National ID number",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        autoComplete: "off",
                                                        required: true,
                                                        value: formData.nationalId,
                                                        onChange: (event)=>updateField("nationalId", event.target.value),
                                                        className: fieldClassName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 296,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "County",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        autoComplete: "address-level1",
                                                        required: true,
                                                        value: formData.county,
                                                        onChange: (event)=>updateField("county", event.target.value),
                                                        className: fieldClassName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 306,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "Ward",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        value: formData.ward,
                                                        onChange: (event)=>updateField("ward", event.target.value),
                                                        className: fieldClassName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 316,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "Target assembly body",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.targetBody,
                                                        onChange: (event)=>{
                                                            const value = event.currentTarget.value;
                                                            if (value === "County Assembly" || value === "National Assembly" || value === "Senate") {
                                                                updateField("targetBody", value);
                                                            }
                                                        },
                                                        className: fieldClassName,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "County Assembly"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "National Assembly"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Senate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 325,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "Target Bill or document name",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        placeholder: "Enter the Bill, plan, budget, or document name",
                                                        value: formData.targetDocument,
                                                        onChange: (event)=>{
                                                            setSelectedBudgetStage("");
                                                            updateField("targetDocument", event.target.value);
                                                        },
                                                        className: fieldClassName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 346,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-sans text-xs font-bold text-ink",
                                                children: [
                                                    "Budget stage, if applicable",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedBudgetStage,
                                                        onChange: (event)=>{
                                                            const stageName = event.currentTarget.value;
                                                            setSelectedBudgetStage(stageName);
                                                            if (stageName) updateField("targetDocument", stageName);
                                                        },
                                                        className: fieldClassName,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select a county budget stage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 17
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$budgetCycle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KENYA_COUNTY_BUDGET_CYCLE"].map((stage)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: stage.stageName,
                                                                    children: stage.stageName
                                                                }, stage.id, false, {
                                                                    fileName: "[project]/src/components/MemoGenerator.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 19
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 359,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                        lineNumber: 285,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 281,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                className: "space-y-4 border-t border-rule pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                        className: "font-sans text-sm font-bold text-ink",
                                        children: "Clause objections and citizen proposals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                        lineNumber: 382,
                                        columnNumber: 11
                                    }, this),
                                    formData.objections.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 rounded-card border border-rule bg-paper p-4 sm:p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-sans text-sm font-bold text-ink",
                                                            children: [
                                                                "Submission item ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MemoGenerator.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 17
                                                        }, this),
                                                        formData.objections.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeMemoItem(index),
                                                            "aria-label": `Remove submission item ${index + 1}`,
                                                            className: "inline-flex items-center gap-1 rounded-control px-2 py-1 font-sans text-xs font-bold text-flag-red hover:bg-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/MemoGenerator.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Remove"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MemoGenerator.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MemoGenerator.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-sans text-xs font-bold text-ink",
                                                    children: [
                                                        "Clause, programme, or line-item reference",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            placeholder: "For example, Article 201 or the ward health allocation",
                                                            value: item.clause,
                                                            onChange: (event)=>updateMemoItem(index, "clause", event.target.value),
                                                            className: fieldClassName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MemoGenerator.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MemoGenerator.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-sans text-xs font-bold text-ink",
                                                    children: [
                                                        "Concern or objection",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            required: true,
                                                            rows: 3,
                                                            value: item.issue,
                                                            onChange: (event)=>updateMemoItem(index, "issue", event.target.value),
                                                            className: fieldClassName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MemoGenerator.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MemoGenerator.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-sans text-xs font-bold text-ink",
                                                    children: [
                                                        "Proposed replacement amendment or action",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            required: true,
                                                            rows: 3,
                                                            value: item.proposal,
                                                            onChange: (event)=>updateMemoItem(index, "proposal", event.target.value),
                                                            className: fieldClassName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MemoGenerator.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MemoGenerator.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/MemoGenerator.tsx",
                                            lineNumber: 386,
                                            columnNumber: 13
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: addMemoItem,
                                        className: "inline-flex items-center gap-2 rounded-control border-2 border-ink px-4 py-2.5 font-sans text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus2$3e$__["FilePlus2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 449,
                                                columnNumber: 13
                                            }, this),
                                            "Add another item"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                        lineNumber: 444,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 381,
                                columnNumber: 9
                            }, this),
                            pdfError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: "alert",
                                className: "rounded-control bg-red-50 p-3 font-sans text-sm text-flag-red",
                                children: pdfError
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-rule pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "inline-flex w-full items-center justify-center gap-2 rounded-control bg-flag-green px-5 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-flag-green-hover sm:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                                lineNumber: 465,
                                                columnNumber: 13
                                            }, this),
                                            "Download printable memo PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                        lineNumber: 461,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 font-serif text-xs leading-relaxed text-ink-muted",
                                        children: "This tool creates a draft for you to review and sign. Confirm the correct clerk, submission method, and deadline in the relevant Assembly notice before filing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoGenerator.tsx",
                                        lineNumber: 468,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemoGenerator.tsx",
                                lineNumber: 460,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemoGenerator.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MemoGenerator.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MemoGenerator.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/toolkit/AtiLetterGenerator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AtiLetterGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-ssr] (ecmascript) <export default as FileSearch>");
"use client";
;
;
;
;
const fieldClassName = "mt-1 w-full rounded-control border-2 border-ink bg-white px-3 py-2.5 font-sans text-sm text-ink focus:border-flag-green focus:outline-none";
function printableText(value) {
    return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[\u2013\u2014]/g, "-").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[^\x20-\x7e]/g, "?");
}
function AtiLetterGenerator() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        nationalId: "",
        target: "",
        department: "",
        requestedInfo: ""
    });
    const [pdfError, setPdfError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const updateField = (field, value)=>{
        setFormData((current)=>({
                ...current,
                [field]: value
            }));
    };
    const generatePDF = (event)=>{
        event.preventDefault();
        setPdfError("");
        try {
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                unit: "mm",
                format: "a4"
            });
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pageWidth - margin * 2;
            let y = margin;
            const ensureSpace = (height)=>{
                if (y + height > pageHeight - margin) {
                    doc.addPage();
                    y = margin;
                }
            };
            const addText = (text, options = {})=>{
                const { bold = false, fontSize = 10, after = 3 } = options;
                doc.setFont("helvetica", bold ? "bold" : "normal");
                doc.setFontSize(fontSize);
                const lines = doc.splitTextToSize(printableText(text), contentWidth);
                const lineHeight = fontSize * 0.48;
                for (const line of lines){
                    ensureSpace(lineHeight);
                    doc.text(line, margin, y);
                    y += lineHeight;
                }
                y += after;
            };
            doc.setFillColor(17, 17, 17);
            doc.rect(margin, y, contentWidth, 25, "F");
            doc.setTextColor(255, 255, 255);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(13);
            doc.text("ACCESS TO INFORMATION REQUEST", margin + 6, y + 9);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.text("ARTICLE 35, CONSTITUTION OF KENYA, 2010 | ACT NO. 31 OF 2016", margin + 6, y + 17);
            y += 31;
            doc.setFillColor(190, 17, 17);
            doc.roundedRect(margin, y, contentWidth, 12, 1, 1, "F");
            doc.setTextColor(255, 255, 255);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.text("STATUTORY RESPONSE PERIOD: 21 DAYS FROM RECEIPT", margin + 4, y + 7.5);
            doc.setTextColor(17, 17, 17);
            y += 19;
            const date = new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });
            addText(`Date: ${date}`, {
                after: 7
            });
            addText("TO:", {
                bold: true,
                after: 1
            });
            addText(formData.department, {
                bold: true,
                after: 1
            });
            addText(formData.target, {
                after: 7
            });
            addText("FROM:", {
                bold: true,
                after: 1
            });
            addText(formData.fullName, {
                after: 1
            });
            addText(`National ID number: ${formData.nationalId}`, {
                after: 7
            });
            addText("RE: REQUEST FOR ACCESS TO PUBLIC INFORMATION", {
                bold: true,
                fontSize: 11,
                after: 7
            });
            addText("Dear Sir/Madam,", {
                after: 5
            });
            addText("Pursuant to Article 35 of the Constitution of Kenya, 2010 and the Access to Information Act, No. 31 of 2016, I request access to the following information held by your office:", {
                after: 4
            });
            addText("INFORMATION REQUESTED", {
                bold: true,
                after: 2
            });
            addText(formData.requestedInfo, {
                after: 7
            });
            addText("Please provide the information in an accessible form. If any part of this request is declined, kindly identify the specific legal basis and explain the applicable review or appeal process.", {
                after: 5
            });
            addText("Under section 9 of the Access to Information Act, the public entity is required to respond to an application as soon as possible and not later than 21 days after receipt, subject to the Act.", {
                after: 8
            });
            addText("Yours faithfully,", {
                after: 13
            });
            addText("Signature: __________________________________", {
                bold: true,
                after: 4
            });
            addText(`Name: ${formData.fullName}`, {
                after: 2
            });
            addText(`National ID number: ${formData.nationalId}`, {
                after: 9
            });
            addText("OFFICE RECEIPT", {
                bold: true,
                after: 3
            });
            addText("Received by: _______________________  Date: ______________", {
                after: 3
            });
            addText("Reference number: ______________________________________");
            const pageCount = doc.getNumberOfPages();
            for(let page = 1; page <= pageCount; page += 1){
                doc.setPage(page);
                doc.setDrawColor(217, 220, 223);
                doc.line(margin, pageHeight - 13, pageWidth - margin, pageHeight - 13);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8);
                doc.setTextColor(100, 100, 100);
                doc.text("Soma Katiba KE | Access to information request", margin, pageHeight - 8);
                doc.text(`${page} / ${pageCount}`, pageWidth - margin, pageHeight - 8, {
                    align: "right"
                });
            }
            const fileName = formData.fullName.trim().replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
            doc.save(`ATI_Request_${fileName || "Citizen"}.pdf`);
        } catch (error) {
            console.error("Failed to generate access to information request PDF.", error);
            setPdfError("The PDF could not be generated. Please try again or print this page instead.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-card border border-rule bg-white p-6 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-start gap-4 border-b border-rule pb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-paper text-flag-green",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-xs font-bold uppercase tracking-wide text-flag-green",
                                children: "Article 35 | Access to Information Act, No. 31 of 2016"
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 font-sans text-2xl font-black text-ink",
                                children: "Formal Access to Information Request"
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 font-serif text-sm leading-relaxed text-ink-muted",
                                children: "Complete the fields to prepare a request for a public entity. The PDF is generated in your browser and is not sent to this website."
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: generatePDF,
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-bold text-ink",
                                children: [
                                    "Full name",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        autoComplete: "name",
                                        value: formData.fullName,
                                        onChange: (event)=>updateField("fullName", event.target.value),
                                        className: fieldClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-bold text-ink",
                                children: [
                                    "ID number",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        autoComplete: "off",
                                        value: formData.nationalId,
                                        onChange: (event)=>updateField("nationalId", event.target.value),
                                        className: fieldClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-bold text-ink",
                                children: [
                                    "Target county or ministry",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        placeholder: "For example, County Government of Kiambu",
                                        value: formData.target,
                                        onChange: (event)=>updateField("target", event.target.value),
                                        className: fieldClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-bold text-ink",
                                children: [
                                    "Department",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        placeholder: "For example, Department of Health",
                                        value: formData.department,
                                        onChange: (event)=>updateField("department", event.target.value),
                                        className: fieldClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block font-sans text-xs font-bold text-ink",
                        children: [
                            "Specific public information requested",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                required: true,
                                rows: 5,
                                placeholder: "Describe the records, dates, locations, and format you are requesting.",
                                value: formData.requestedInfo,
                                onChange: (event)=>updateField("requestedInfo", event.target.value),
                                className: fieldClassName
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    pdfError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        className: "rounded-control bg-red-50 p-3 font-sans text-sm text-flag-red",
                        children: pdfError
                    }, void 0, false, {
                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-rule pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "inline-flex w-full items-center justify-center gap-2 rounded-control bg-flag-green px-5 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-flag-green-hover sm:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-5 w-5",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    "Download request PDF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 font-serif text-xs leading-relaxed text-ink-muted",
                                children: "The 21-day response period is subject to the Access to Information Act. Check the relevant public entity's submission requirements."
                            }, void 0, false, {
                                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/toolkit/AtiLetterGenerator.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/budgetCycle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KENYA_COUNTY_BUDGET_CYCLE",
    ()=>KENYA_COUNTY_BUDGET_CYCLE
]);
const KENYA_COUNTY_BUDGET_CYCLE = [
    {
        id: "annual-development-plan",
        stageName: "Annual Development Plan (ADP)",
        deadline: "1 September",
        legalFramework: "Public Finance Management Act, section 126(3)",
        description: "The County Executive Committee member responsible for planning submits the county government's Annual Development Plan to the County Assembly for approval.",
        citizenAction: [
            "Review the proposed projects and priorities for your ward.",
            "Ask for project locations, expected outputs, costs, and delivery dates.",
            "Submit ward priorities to the County Treasury and Assembly before the plan is approved."
        ]
    },
    {
        id: "cbrop",
        stageName: "County Budget Review and Outlook Paper (CBROP)",
        deadline: "30 September",
        legalFramework: "Public Finance Management Act, section 118(1)",
        description: "The County Treasury prepares the County Budget Review and Outlook Paper, reviewing the previous financial year's fiscal performance and updating the economic and budget outlook.",
        citizenAction: [
            "Compare approved plans with actual spending and service delivery.",
            "Ask about underspending, pending bills, county revenue, and incomplete projects.",
            "Send written questions and request supporting records where figures need explanation."
        ]
    },
    {
        id: "county-fiscal-strategy-paper",
        stageName: "County Fiscal Strategy Paper (CFSP)",
        deadline: "28 February",
        legalFramework: "Public Finance Management Act, section 117(1)",
        description: "The County Treasury submits the County Fiscal Strategy Paper to the County Assembly, setting the county's fiscal framework, priorities, and sector expenditure ceilings.",
        citizenAction: [
            "Review the proposed sector priorities and expenditure ceilings.",
            "Identify services that need more or less funding and explain the local impact.",
            "Send written comments to the County Treasury and Assembly before adoption."
        ]
    },
    {
        id: "budget-estimates",
        stageName: "Budget Estimates",
        deadline: "30 April",
        legalFramework: "Public Finance Management Act, section 129(2)",
        description: "The County Executive submits annual budget estimates to the County Assembly for consideration and approval before the start of the next financial year.",
        citizenAction: [
            "Attend an announced budget hearing or submit written comments before the deadline.",
            "Identify the relevant programme, ward project, or budget line.",
            "Explain the impact on residents and propose a practical allocation or change."
        ]
    },
    {
        id: "county-finance-bill",
        stageName: "County Finance Bill",
        deadline: "Within 90 days after the Appropriation Bill is passed",
        legalFramework: "Public Finance Management Act, section 133(1)",
        description: "The County Finance Bill sets out county revenue-raising measures, including taxes, fees, and charges. The Act requires the Assembly to consider and approve it no later than 90 days after passing the Appropriation Bill.",
        citizenAction: [
            "Review proposed taxes, fees, and charges for affordability and local impact.",
            "Identify the exact charge and explain how it affects residents or businesses.",
            "Submit evidence-based changes to the Assembly before it votes on the Bill."
        ]
    }
];
}),
]})(),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1qe1th6uijvgq._.js.map