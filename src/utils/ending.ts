const PLURAL_RULE = new Intl.PluralRules('en-US')

export default function getEnding(quantity: number, singular: string, plural: string): string {
	const result = PLURAL_RULE.select(quantity)
	return result === 'one' ? singular : plural
}
