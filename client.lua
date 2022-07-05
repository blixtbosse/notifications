exports('CreateNotification', SendNUIMessage)

-- [EXAMPLE]

-- exports.notifications:CreateNotification({
--     text = 'Du fick 1 ~lg~macka~s~', -- Text för notifikationen
--     icon = 'error', -- Vilken ikon vill du ha? KOlla https://fonts.google.com/icons
--     color = 'red' -- färgern på ikonen,
--     timeout = 5000 -- tid i millisekunder,
-- })