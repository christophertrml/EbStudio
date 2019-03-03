import Section from '../../models/sections/section';
import HtmlConversionStrategyBase from './html-conversion-strategy-base';

export default class TitleHtmlConversionStrategy extends HtmlConversionStrategyBase {
     getDivHtml(section: Section): string {
         return m"<div class='title'>";
     }
}