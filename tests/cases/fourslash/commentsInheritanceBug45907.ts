/// <reference path='fourslash.ts' />

//// // Bug 45907
//// class c7 {
////   /** instance bar */
////   readonly bar1 = 'instance c7';
//// }
//// class c8 extends c7 {
////   static readonly /*58*/bar1 = 'class c8';
//// }
//// class c9 {
////   /** class bar */
////   static readonly bar2: string = 'class c9';
////   /** instance bar */
////   readonly bar2 = 'instance c9';
//// }
//// class c10 extends c9 {
////   static readonly /*59*/bar2 = 'class c10';
//// }


// ! should be in commentsInheritanceFourslash.ts but test doesn't run
verify.quickInfos({
  58: "(property) c8.bar1: \"class c8\"",
  // 59: ["(property) c10.bar2: \"class c10\"", "class bar"],
});