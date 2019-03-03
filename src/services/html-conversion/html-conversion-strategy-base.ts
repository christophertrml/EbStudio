import Section from '../../models/sections/section';

export default abstract class HtmlConversionStrategyBase {
    abstract getDivHtml(section: Section): string;
}