You are converting a travel package document into JSON.

Follow the uploaded schema/code strictly. Do not invent schema values. Do not create new slugs. Do not create new categories, trips, destinations, or enum values. Every controlled field must come only from the predefined valid lists supplied in the code.

Core extraction rule:

Use only factual information found in the uploaded package document. Preserve the package meaning, route, logistics, and itinerary structure. Do not add unconfirmed services, activities, routes, places, dates, agencies, or marketing claims.

Output rule:

Return valid JSON only. Do not include explanations outside the JSON unless specifically asked.

Strict enum rule:

The following fields must only use values already present in their predefined valid lists:

subcategories must only use exact values from VALID_SUBCATEGORIES.

trips must only use exact values from VALID_TRIPS.

destinations must only use exact values from VALID_DESTINATIONS.

seasons must only use exact values from VALID_SEASONS.

difficultyLevel must only use exact values from VALID_DIFFICULTIES.

budget must only use exact values from VALID_BUDGETS.

tier must only use exact values from VALID_TIERS.

badge must only use exact values from VALID_BADGES.

The program must never create new values for these fields. It must never create a new slug by lowercasing, slugifying, shortening, rewriting, or guessing. If a detected value does not exactly match one of the predefined valid values, remove it. If no valid value is found, return null for that field.

Trips rule:

The trips field must match one or more exact slugs from VALID_TRIPS only.

Do not create a trip slug from the package title.

Do not create a trip slug from destination names.

Do not create a trip slug from route names.

Do not create a trip slug from keywords.

Do not return a trip unless the final selected value exists exactly inside VALID_TRIPS.

If the package title or route suggests a known trip, match it to the closest valid predefined slug only when that exact slug exists in VALID_TRIPS.

Prefer the most specific valid trip over a generic trip.

Examples of specificity:

* If the package mentions Everest Base Camp with helicopter return, prefer the valid helicopter-return EBC trip slug if it exists in VALID_TRIPS.
* If the package mentions Gokyo Lakes and Cho La, prefer the valid Gokyo/Cho La related trip slug if it exists in VALID_TRIPS.
* If the package mentions Ama Dablam Base Camp side trip, prefer the valid Ama Dablam Base Camp trip slug if it exists in VALID_TRIPS.
* If the package mentions budget, luxury, short, road route, Jiri route, heli trek, or sleep-at-base-camp, choose the more specific matching valid slug if it exists.
* If no exact valid slug is confidently matched, set trips to null.

Subcategories rule:

The subcategories field must only contain exact values from VALID_SUBCATEGORIES.

Do not invent new subcategory names.

Do not output display labels such as “Classic & Short Treks” unless the predefined valid list uses that exact value. If the valid list uses slugs, output the slug only.

Do not output generated slugs that are not already present in VALID_SUBCATEGORIES.

If no valid subcategory is confidently matched, set subcategories to null.

Destinations rule:

The destinations field must only contain exact values from VALID_DESTINATIONS.

Do not create destination slugs from place names.

Do not add a city, region, mountain, country, or park unless its exact value exists in VALID_DESTINATIONS.

If the document mentions a place that is not in VALID_DESTINATIONS, use it only in description or itinerary text, not in the destinations array.

If no valid destination is confidently matched, set destinations to null.

Removed fields rule:

Do not include these fields anywhere in the output JSON:

agency

metaTitle

metaDescription

note

The note field must be removed from all itinerary objects.

Roles rule:

Do not include roles in middle itinerary objects.

Only the first itinerary object may contain:

"roles": ["starting_point"]

Only the last itinerary object may contain:

"roles": ["final_destination"]

If there is only one itinerary object, use only:

"roles": ["final_destination"]

Do not include any other role value.

Accommodation rule:

itineraries[].accommodation must only use one of the following exact values:

"teahouselodge"

"teahouse"

"lodge"

"hotel"

Do not output free-text accommodation such as “hotel in Kathmandu,” “mountain lodge,” “tea house / lodge,” “guesthouse,” “camp,” or “tent.”

Normalize accommodation only into the four allowed values:

Teahouse / Lodge, Teahouse-Lodge, tea house lodge, lodge-to-lodge teahouse → "teahouselodge"

Teahouse, tea house → "teahouse"

Lodge, guesthouse, guest house → "lodge"

Hotel, resort → "hotel"

If the accommodation cannot be mapped to one of those four values, set accommodation to null.

Departure dates rule:

departureDates must not be empty.

departureDates must use ISO UTC format exactly like:

"2026-09-01T00:00:00.000Z"

If valid manual departure dates are provided, use them.

If no manual departure dates are provided, generate departureDates from inferred seasons:

spring → "2026-03-01T00:00:00.000Z"

summer → "2026-06-01T00:00:00.000Z"

autumn → "2026-09-01T00:00:00.000Z"

winter → "2026-12-01T00:00:00.000Z"

If no season is detected, use:

"2026-09-01T00:00:00.000Z"

Season rule:

seasons must only use:

"spring"

"summer"

"autumn"

"winter"

Do not create values such as “monsoon,” “fall,” “pre-monsoon,” “post-monsoon,” or “year-round.” Convert only when the meaning is clear:

* fall → autumn
* pre-monsoon → spring
* post-monsoon → autumn

If unclear, omit that season.

Itinerary rule:

Each itinerary object should include only valid schema fields.

Use this structure where available:

dayNumber

title

caption

mapImageUrl

elevation

description

activities

meals

accommodation

geopoint

roles only for the first and last itinerary as described above

Do not include note.

Do not include extra itinerary fields that are not in the schema.

Activities rule:

Do not invent activities.

Activities should be extracted from route movement, duration, transport, via points, and explicitly mentioned experiences.

If a controlled activity enum list is provided, activities must only use exact values from that list. If no valid activity enum exists, keep activities as factual short text from the itinerary only.

Coordinates and elevation rule:

Use coordinates only if they are present in the source document.

Do not invent latitude or longitude.

Use elevation only if it is present in the document or clearly extractable from itinerary metadata.

If coordinates or elevation are not available, use null.

General cleanup rule:

Remove empty optional fields unless the schema requires them.

Keep required nullable fields as null when unknown.

Do not output empty arrays for controlled fields unless the schema specifically requires an array. Prefer null when no valid controlled value exists.

Final validation rule:

Before returning the JSON, run a strict final validation mentally or in code:

Every trips value must be in VALID_TRIPS.

Every subcategories value must be in VALID_SUBCATEGORIES.

Every destinations value must be in VALID_DESTINATIONS.

Every accommodation value must be one of teahouselodge, teahouse, lodge, hotel, or null.

departureDates must contain at least one valid ISO date.

No agency field.

No metaTitle field.

No metaDescription field.

No note field.

No roles field except in the first and last itinerary.

If any field violates these rules, remove or correct it before final output.
