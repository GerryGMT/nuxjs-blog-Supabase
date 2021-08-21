import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://qyxphsgmedjaztbgdwlb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTQ3ODU1MiwiZXhwIjoxOTQ1MDU0NTUyfQ.lKWZFgdJk6k1x51HumbyqS9J7snX5n2ptGUoiGnBVDc"
);
export default (_, inject) => {
  inject("supabase", supabase);
};
