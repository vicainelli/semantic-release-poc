module.exports = {
	extends: ["@commitlint/config-conventional"],
	parserPreset: {
		parserOpts: {
			// Scope is optional, allows optional space after type, and enforces jira ticket
			headerPattern:
				/^([a-z]+) ?(?:\(([a-z0-9-]+)\))?: ([a-z]{2,5}-\d{1,8}) (.+)$/,
			headerCorrespondence: ["type", "scope", "jira", "subject"],
		},
	},
	rules: {
		"type-case": [2, "always", "lower-case"],
		"scope-case": [2, "always", "lower-case"],
		"type-empty": [0], // Disable misleading error
		"subject-empty": [0], // Disable misleading error
	},
};
