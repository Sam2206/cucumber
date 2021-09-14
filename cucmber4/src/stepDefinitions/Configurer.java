package stepDefinitions;

import java.util.Locale;
import java.util.Map;

import cucumber.api.TypeRegistry;
import cucumber.api.TypeRegistryConfigurer;
import domains.CalorieDetail;
import io.cucumber.datatable.DataTableType;
import io.cucumber.datatable.TableEntryTransformer;

public class Configurer implements TypeRegistryConfigurer {

	@Override
	public void configureTypeRegistry(TypeRegistry registry) {

		registry.defineDataTableType(new DataTableType(CalorieDetail.class, new TableEntryTransformer<CalorieDetail>() {
			
			@Override
			public CalorieDetail transform(Map<String, String> entry) throws Throwable {
				return new CalorieDetail(Integer.parseInt(entry.get("age")), Integer.parseInt(entry.get("height")), Integer.parseInt(entry.get("weight")), entry.get("sex"));
			}
		}));
	}

	@Override
	public Locale locale() {
		return Locale.ENGLISH;
	}

}
