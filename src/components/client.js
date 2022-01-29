import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://igihismuynojevyhqmhm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI4OTQ0OCwiZXhwIjoxOTU4ODY1NDQ4fQ.yQuiMUch8G0aCynxSrheGESLZ-6s-URakNCBXKKjWJQ')

export {
    supabase
}