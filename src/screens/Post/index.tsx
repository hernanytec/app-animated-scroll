import { ScrollView, Text, View } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import { styles } from "./styles";

export function Post() {
  return <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Lorem ipsum</Text>

      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
        </Text>
      </View>
    </ScrollView>

    <ProgressBar value={50} />
  </View>
}