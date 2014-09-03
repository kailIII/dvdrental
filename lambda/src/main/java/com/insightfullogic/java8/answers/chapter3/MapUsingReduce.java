package com.insightfullogic.java8.answers.chapter3;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;

/**
 * Advanced Exercises Question 2
 */
public class MapUsingReduce {

    public static <I, O> List<O> map(Stream<I> stream, Function<I, O> mapper) {
        return stream.reduce(new ArrayList<O>(), (acc, x) -> {
            acc.add(mapper.apply(x));
            return acc;
        }, (List<O> left, List<O> right) -> {
            left.addAll(right);
            return left;
        });
    }

}
